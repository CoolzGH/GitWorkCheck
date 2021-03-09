import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Teacher, { Stuff } from "./Teacher";
import Preloader from "../gif/preloader.gif";
import '../App.css';

const allStuffNet: Stuff[] = [
  {
    title: "Первый товар",
    description: "Very good stuff",
  },
  {
    title: "Second stuff",
    description: "Very Very good stuff",
    price: 50,
  },
  {
    title: "Another one",
    description: "Not Very good stuff",
    price: 1,
  },
  {
    title: "Another one +",
    description: "Not Very good stuff",
    price: 15,
  },
];

interface IState {
  allStuff: Stuff[];
}

export default class Teachers extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      allStuff: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ allStuff: allStuffNet });
    }, 5000);
  }

  render() {
    return (
      <>
        {this.state.allStuff.length > 0 ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={1}>
                {this.state.allStuff.map((item: Stuff) => {
                  return (
                    <Teacher
                      key={item.title}
                      stuff={item}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        ) : (
            <div className="preloader">
                <img src={Preloader} />
            </div>
        )}
      </>
    );
  }
}
