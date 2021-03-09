import {
    Card,
    CardContent,
    Typography,
  } from "@material-ui/core";
  import React, { Component } from "react";
  
  export interface Stuff {
    title: string;
    description: string;
    price?: number;
  }
  
  interface IProps {
    stuff: Stuff;
  }
  
  interface IState {
    clickCount: number;
  }
  
  export default class Teacher extends Component<IProps, IState> {
    myStuff: Stuff;
    constructor(props: IProps) {
      super(props);
      this.state = {
        clickCount: 0,
      };
      this.myStuff = props.stuff;
    }
  
    clickHandler = () => {
      this.setState(
        {
          clickCount: this.state.clickCount + 1,
        },
        () => {
          console.log(`Hello, you clicked ! ${this.state.clickCount}`);
        }
      );
    };
  
    render() {
      return (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.myStuff.title}
            </Typography>
            <Typography variant="body2" component="p">
              {this.myStuff.description}
            </Typography>
            <Typography variant="body2" component="p">
              Price: {this.myStuff.price ?? "-"}
            </Typography>
            <Typography variant="body2" component="p">
              You have clicked {this.state.clickCount} times
            </Typography>
          </CardContent>
        </Card>
      );
    }
  }