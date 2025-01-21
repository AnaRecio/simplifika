import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().min(8),
  message: z.string().min(10),
  language: z.string().regex(/^(ES|EN)$/)
})

export async function POST(request: Request) {
  console.log('API route hit')
  
  try {
    const formData = await request.json()
    console.log('Received body:', formData)

    const validatedData = formSchema.parse(formData)
    console.log('Validated data:', validatedData)

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        ...validatedData,
        created_at: new Date().toISOString()
      }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    console.log('Success:', data)
    return NextResponse.json({ success: true, data })

  } catch (error: any) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
} 