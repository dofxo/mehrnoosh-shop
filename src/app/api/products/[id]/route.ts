import { supabase } from "@/utils/supabase";
import { NextResponse, NextRequest } from "next/server";

export async function GET(_: NextRequest, { params }: { params: any }) {
  try {
    const { id } = params;

    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (error) throw error;
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: any }) {
  try {
    const { id } = params;

    // Parse the request body
    const body = await req.json();

    // Get the previous data to add the new data to it
    const { data: product } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 },
      );
    }

    const comments = product[0].comments;

    // Update field
    const { error } = await supabase
      .from("products")
      .update({ comments: [body, ...comments] })
      .eq("id", id)
      .select("*");

    if (error) throw error;

    // Return a success response
    return NextResponse.json(
      { message: "Data received successfully", body },
      { status: 200 },
    );
  } catch (error) {
    // Handle errors
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
