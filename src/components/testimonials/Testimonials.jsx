import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "AUSEC-MIT",
      title: "Vice President-Internal Affairs",
      img:
        "https://i1.wp.com/www.tamilanjobs.com/wp-content/uploads/2017/12/Anna_University_Logo.svg_.png?fit=1031%2C1024&ssl=1",
      icon: "assets/twitter.png",
      desc:
        "Currently working as the Vice President of Internal affairs in the Entrepreneurship club of Madras Institute of Technology",
    },
    {
      id: 2,
      name: "Vibez MIT",
      title: "Singer",
      img:
        "https://cdn.rekkerd.org/wp-content/uploads/2018/03/Recording-vocals.jpg",
      icon: "assets/youtube.png",
      desc:
        "Vocalist in College Music band",
      featured: true,
    },
    {
      id: 3,
      name: "Competitive coding",
      title: "Leetcode, Hackerrank, Coding ninjas",
      img:
        "https://leetcode.com/static/images/LeetCode_logo.png",
      icon: "assets/linkedin.png",
      desc:
        "Enthusisatic, interested and excited to learn and explore different problems and solve them.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Other Activities</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
