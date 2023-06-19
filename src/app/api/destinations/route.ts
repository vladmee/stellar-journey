import { NextResponse } from 'next/server';

import data from '@/data/data.json';
import { Destination } from '@/data/types';

export async function GET(req: Request) {
  if (!data) {
    console.error('Data not found');
    return NextResponse.json({ message: 'Data not found' }, { status: 500 });
  }

  if (!data.destinations) {
    console.error('Destinations not found');
    return NextResponse.json(
      { message: 'Destinations not found' },
      { status: 500 }
    );
  }

  const pageData = data.destinations as Destination[];

  if (!pageData) {
    console.error('Page data not found');
    return NextResponse.json(
      { message: 'Page data not found' },
      { status: 500 }
    );
  }

  return NextResponse.json(pageData);
}
