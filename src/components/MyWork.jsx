import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import { GitHub, Visibility } from "@material-ui/icons";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.section.sectioncontent} id={id}>
        <Container>
          <Typography className={classes.titleWork} variant="h3">
            {title}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work1">
                <div className="content">
                  <h2 className="title">servicgomez.com</h2>
                  <p className="copy">
                    Se diseño y desarrollo este sitio para el cliente de
                    servicios de plomería pintura y electricidad
                  </p>
                  <button className="btn">
                    <a
                      href="https://servicgomez.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Visibility />
                    </a>
                  </button>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work2">
                <div className="content">
                  <h2 className="title">globalyri.com</h2>
                  <p className="copy">
                    Se diseño y desarrollo este sitio para el cliente de para
                    darse a conocer en la web
                  </p>
                  <button className="btn">
                    <a
                      href="http://globalyri.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Visibility />
                    </a>
                  </button>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work3">
                <div className="content">
                  <h2 className="title">Dashboard Template</h2>
                  <p className="copy">
                    Dashboard admin app template desarrollado en HTML, CSS y
                    Javascript
                  </p>
                  <div className="container-btn">
                    <button className="btn">
                      <a
                        href="https://dashboard-template-basic.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Visibility />
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/japdz83/dashboard-template-basic.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work4">
                <div className="content">
                  <h2 className="title">Slide Venta</h2>
                  <p className="copy">
                    Slide de venta de producto proyecto personal, desarrollado
                    en HTML, CSS y Javascript
                  </p>
                  <div className="container-btn">
                    <button className="btn">
                      <a
                        href="https://japdz83.github.io/slide_venta/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Visibility />
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/japdz83/slide_venta.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="work-row">
            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work5">
                <div className="content">
                  <h2 className="title">Buscador de Imagen</h2>
                  <p className="copy">
                    Este proyecto esta desarrollado en React con la intension de
                    hacer un buscador imagenes consumiendo la API de unsplash
                  </p>
                  <div className="container-btn">
                    <button className="btn">
                      <a
                        href="https://reactjs-gallery-app.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Visibility />
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/japdz83/img-gallery-app.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work6">
                <div className="content">
                  <h2 className="title">React E-Commerce</h2>
                  <p className="copy">
                    En este proyecto se uso firebase para crear un login y
                    registro usando solo correo y password como datos para ver
                    el proceso de seleccion de productos, aun en proceso de
                    desarrollo
                  </p>
                  <div className="container-btn">
                    <button className="btn">
                      <a
                        href="https://app-e-commerce-react.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Visibility />
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/japdz83/basic-ecommerce-react.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work7">
                <div className="content">
                  <h2 className="title">Contact List</h2>
                  <p className="copy">
                    Este proyecto fue desarrollado en React y hace uso de hook
                  </p>
                  <div className="container-btn">
                    <button className="btn">
                      <a
                        href="https://simple-lista-contact.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Visibility />
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/japdz83/dashboard-template-basic.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <div className="card-work img-work8">
                <div className="content">
                  <h2 className="title">Admin Dashboard React</h2>
                  <p className="copy">
                    Proyecto realizado en React haciendo uso de Material UI,
                    React Route Dom, hook para hacer un sitio optimo para
                    futuros cliente, aun en proceso de desarrollo
                  </p>
                  <div className="container-btn">
                    <button className="btn">
                      <a
                        href="https://app-admin-dashboard-react.netlify.app/ "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Visibility />
                      </a>
                    </button>
                    <button className="btn">
                      <a
                        href="https://github.com/japdz83/admin-dashboard-react.git"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHub />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    padding: "50px 10px",
  },
  sectiondark: {
    background: "#000d20",
    color: "#fff",
  },
  titleWork: {
    marginBottom: "30px",
    fontWeight: "bold",
  },
  iconGithub: {
    color: "#fff !important",
    fontSize: "30px",
  },
}));

export default MyWork;
