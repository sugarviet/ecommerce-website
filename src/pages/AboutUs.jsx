import { Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div className="about-us">
      <Container>
        <Grid container>
          <Grid item lg={8}>
            <div className="about-us-content">
              <h1>About us</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus dolore placeat pariatur at saepe sequi accusantium
                nihil architecto explicabo magnam aut eos repellat tempore
                laborum mollitia quo numquam, consectetur odio. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Deleniti, ratione
                qui. Saepe deleniti atque nesciunt odio rem explicabo facere
                itaque delectus suscipit illo. Dolorem omnis architecto
                exercitationem praesentium necessitatibus quisquam.
              </p>
            </div>
            <Grid container spacing={8}>
              <Grid item lg={4}>
                <motion.div whileHover={{scale: 1.2}} className="about-info">
                  <span>
                    <i class="ri-facebook-line"></i>
                  </span>
                  <h5>Facebook</h5>
                </motion.div>
              </Grid>
              <Grid item lg={4}>
              <motion.div whileHover={{scale: 1.2}} className="about-info">
                  <span>
                  <i class="ri-instagram-line"></i>
                  </span>
                  <h5>Instagram</h5>
                </motion.div>
              </Grid>
              <Grid item lg={4}>
                <motion.div whileHover={{scale: 1.2}} className="about-info">
                <span>
                    <i class="ri-twitter-line"></i>
                  </span>
                  <h5>Twitter</h5>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <div className="about-us-img">
              <img
                src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?w=1060&t=st=1667291236~exp=1667291836~hmac=8e1246515402e139ff7b51c8b5b86f3141b49dcd33948a1424573dcbd906cddc"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUs;
