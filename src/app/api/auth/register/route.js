import { connectToDatabase } from '../../../../utils/connectToDatabase';
import User from '../../../../models/UserModel';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { fullName, email, password } = await request.json();

    // Connect to database
    await connectToDatabase();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password
    });

    await newUser.save();

    return NextResponse.json(
      { message: 'User created successfully', userId: newUser._id },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}