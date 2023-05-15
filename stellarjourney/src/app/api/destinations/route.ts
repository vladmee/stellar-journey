import { NextResponse } from 'next/server';

import data from '@/data/data.json';
import { Destination } from '@/data/types';

export async function GET(req: Request) {
  const pageData = data.destinations as Destination[];

  if (pageData === undefined) {
    return NextResponse.json(
      { message: 'Page data not found' },
      { status: 500 }
    );
  }

  return NextResponse.json(pageData);
}
