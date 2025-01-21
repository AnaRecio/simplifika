import { NextResponse } from 'next/server'
import { supabase } from '../../lib/supabase'
import { z } from 'zod'

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
    const body = await request.json()
    console.log('Received body:', body)

    const validatedData = formSchema.parse(body)
    console.log('Validated data:', validatedData)

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone,
        message: validatedData.message,
        language: validatedData.language,
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

  } catch (error) {
    console.error('Error in API route:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 