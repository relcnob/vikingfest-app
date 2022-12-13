import BandSingleView from "../../components/band-single-view/BandSingleView";

function SingleBandPage(props) {
  console.log(props.data);
  return (
    <>
      <BandSingleView bandName={props.data.name} genre={props.data.genre} description={props.data.bio} members={props.data.members} />
    </>
  );
}
export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const res = awaitfetch("http://localhost:8080/bands");

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();

  const band = data.filter((entry) => entry.slug === slug);
  return {
    props: {
      data: band[0],
    },
  };
}

export default SingleBandPage;
