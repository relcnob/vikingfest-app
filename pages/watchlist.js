import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import WatchlistRedirect from "../components/watchlist-view/WatchlistRedirect";
import WatchlistView from "../components/watchlist-view/WatchlistView";
export default function watchlist({ user, bands, watchlist, schedule }) {
  // console.log(watchlist);
  // console.log(bands);
  return (
    <>
      <WatchlistView user={user} bands={bands} watchlist={watchlist} schedule={schedule} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check if we have a session
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  } else {
    const bandRes = await fetch(`${process.env.SERVER_URL}bands`);
    const bands = await bandRes.json();
    const schedRes = await fetch(`${process.env.SERVER_URL}schedule`);
    const schedule = await schedRes.json();

    const { data, error } = await supabase.from("profiles").select("id, watchlist(bands)");
    if (error) {
      return {
        props: {
          initialSession: session,
          user: session.user,
          bands,
          schedule,
        },
      };
    }
    const watchlist = data.filter((entry) => session.user.id === entry.id)[0].watchlist.bands;

    return {
      props: {
        initialSession: session,
        user: session.user,
        bands: bands.filter((entry) => watchlist.includes(entry.slug)),
        watchlist,
        schedule,
      },
    };
  }
};
