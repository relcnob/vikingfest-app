import BandSingleView from "../../components/band-single-view/BandSingleView";

function SingleBandPage(props) {
  console.log(props.data);
  return (
    <>
      <BandSingleView bandName={props.data.name} genre={props.data.genre} description={props.data.bio} members={props.data.members} />
    </>
  );
}
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await fetch("http://localhost:8080/bands");

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();

  const band = data.filter((bd) => bd.slug === slug);
  return {
    props: {
      data: band[0],
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();

  const paths = data.map((band) => {
    return { params: { slug: band.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default SingleBandPage;
