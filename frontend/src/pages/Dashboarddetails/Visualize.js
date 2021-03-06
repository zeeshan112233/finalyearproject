import React, { Component } from "react";
import $ from "jquery";
import io from "socket.io-client";
import Button from "@material-ui/core/Button";
import { MDBInput } from "mdbreact";
import axios from 'axios';
import Volozehowe from './visolizeshowansquestion';
import { Autorenew } from '@material-ui/icons';
import {
  GooSpinner
} from "react-spinners-kit";

class Visualize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: []
    };

    this.handleChange = this.handleChange.bind(this);

  }

  onClick = async () => {
    fetch("http://localhost:3000/streamings/addquery", {
      method: "PUT",
      body: JSON.stringify({ name: this.props.match.params.name, query: this.state.query }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        this.setState({ query: "" });

      })
  };

  handleChange(e) {
    this.setState({ query: e.target.value });
    console.log("query is " + this.state.query)
  }

  componentDidMount() {
    this.VisualizeFunc();
    this.handlefetchallquestion();
  }

  handlefetchallquestion = async () => {

    try {
      const responsove = await axios.post('http://localhost:3000/streamings/vislutos/',
        {
          name: this.props.match.params.name
        }
      );
      this.setState({ data: responsove.data })




    } catch (error) {
      console.log('facing error ', error);
    }



  }






  VisualizeFunc = () => {
    var socket = io.connect("http://localhost:4001");

    socket.emit("stream1", this.props.match.params.name);

    socket.on("stream", function (image) {
      $("#play").attr("src", image);
      $("#logger").text(image);
    });
  };
  render() {
    return (

      <React.Fragment
      // style={{
      //   overflowX: "hidden",
      //   overflowY: "hidden",
      // }}
      >
        <div style={{
          textAlign: "center", width: "100%", overflowY: "hidden",
          overflowY: "hidden",
        }}>

          <div style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex"
          }}>
            <GooSpinner size={90} color="#57B0D4" />
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                color: "#4A96BA",
                fontWeight: "bolder",
                fontSize: 40,
                marginBottom: "2%",
                marginLeft: "2%"
              }}
            >

              {`YOU ARE WATCING ${this.props.match.params.name}`}
            </h1>   <GooSpinner size={90} color="#57B0D4" /></div>

          <div style={{ textAlign: "center", display: "flex", width: "97%", height: 600, margin: "1%" }}>
            <img
              style={{
                width: "65%",
                height: 600,
                // backgroundColor: "#D6EAF8",
                // borderRadius: 20,
                // borderWidth: 20,
                paddingRight: 20,
                justifyContent: "center",
                overflowY: "hidden",
                overflowY: "scroll",
              }}
              id="play"
            />

            <div
              style={{
                width: "35%",
                height: 600,
                backgroundColor: "#D6EAF8",
                borderRadius: 5,
                // borderWidth: 20,
                justifyContent: "center",
                justifyItems: "center", alignItems: "center",

                paddingTop: "3%"
              }}
            >
              <div
                style={{
                  width: "100%",

                  borderRadius: 20,
                  marginTop: "4%",
                  borderWidth: 20,
                }}
              >
                <h1 style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  fontWeight: "bolder",
                  marginBottom: "3%",

                }}> ANY CONSUFISON / QUERY ?   </h1>

                <h1 style={{
                  textAlign: "center",
                  fontFamily: "Roboto",
                  color: "#4A96BA",
                  fontWeight: "bolder",
                  marginBottom: "3%"
                }}>
                  Just write and send it !  </h1>
              </div>

              <div style={{ paddingTop: 30 }}>
                <textarea
                  onChange={this.handleChange}
                  value={this.state.query}
                  style={{
                    width: "60%",
                    height: 200,
                    borderRadius: 1,
                    padding: 40,

                  }}
                >


                </textarea>
                <br></br>
                <Button
                  onClick={this.onClick}
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "5%",
                    width: "50%",
                  }}
                >
                  SEND
          </Button>

              </div>
            </div>
          </div>


          <div style={{
            backgroundColor: "#D6EAF8", margin: "1%", padding: "1%"
          }}>


            <h1
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                color: "#4A96BA",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: "2%"
              }}
            >

              Already provided Answers !           </h1>  <Button
              variant="contained"
              color="primary"
              style={{
                margin: '0.5rem'
              }}
              onClick={this.handlefetchallquestion}
              startIcon={<Autorenew />}
            >
              Refresh Answers
      </Button>




            {this.state.data.map(({ question, answer }, index) => {
              return <div style={{ margin: '2rem', }}>


                <Volozehowe
                  key={index}
                  index={index}
                  question={question}
                  answer={answer}


                />

              </div>


            })}
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Visualize;
