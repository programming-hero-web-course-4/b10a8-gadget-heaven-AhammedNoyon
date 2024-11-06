import NavText from "../NavText";
import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistic</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="mb-60">
          <NavText
            title="Statistics"
            subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          ></NavText>
        </div>
      </div>
    </>
  );
};

export default Statistics;
