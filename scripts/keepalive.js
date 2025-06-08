import { supabase } from "@/utils/supabase";

async function updateKeepAlive() {
  try {
    const { data, error } = await supabase
      .from("keepalive")
      .update({ last_ping: new Date().toISOString() })
      .eq("id", 1);

    if (error) throw error;
    console.log("✅ Keep-alive ping:", new Date().toISOString());
  } catch (err) {
    console.error("❌ Error pinging Supabase:", err.message);
    process.exit(1); // Fail the workflow if error
  }
}

updateKeepAlive();
