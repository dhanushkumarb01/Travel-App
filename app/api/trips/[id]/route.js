import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Trip from '@/models/Trip';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;

    const trip = await Trip.findById(id);
    
    if (!trip) {
      return NextResponse.json(
        { error: 'Trip not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ trip }, { status: 200 });
  } catch (error) {
    console.error('Error fetching trip details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trip details' },
      { status: 500 }
    );
  }
}