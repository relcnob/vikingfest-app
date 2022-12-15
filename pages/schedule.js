import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import SchedulePage from "../components/schedule/SchedulePage";
export default function schedule(props) {
  return (
    <>
      <SchedulePage schedule={props.schedule} user={props.user} initialSession={props.initialSession} />
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const scheduleResponse = await fetch(process.env.SERVER_URL + "schedule");
  const schedule = await scheduleResponse.json();
  //   console.log(schedule);

  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if we have a session
  if (!session)
    return {
      props: {
        schedule,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
      schedule,
    },
  };
};
