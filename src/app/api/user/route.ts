// packages
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// libraries

// utils

export async function GET() {
	try {
		// do something here
		//const user = await function();
		return NextResponse.json({ user });
	} catch(e) {
		console.error(e);
		return NextResponse.json({ error: 'Unable to retrieve user.' }, { status: 500 });
	}
}

export async function PUT(req: NextRequest) {
	const cookieStore = await cookies();
	const userId = cookieStore.get('user_id')?.value;
	const body = await req.json();
	const { name } = body;
	if (!userId) { return NextResponse.json({ error: 'User ID not found in cookies.' }, { status: 400 }); }
	// do something here
	// 
	return NextResponse.json({ success: true });
}