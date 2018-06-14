import axios from "axios";
import * as React from "react";
import { render } from "react-dom";
import { IHealth } from "../common";

interface IAppState {
  readonly startedAt: string;
}

class App extends React.Component<{}, IAppState> {
  public constructor(props: {}) {
    super(props);

    this.state = {
      startedAt: ""
    };
  }

  public async componentDidMount() {
    const { data } = await axios.request<IHealth>({
      url: "/v1/health"
    });

    this.setState({
      startedAt: data.startedAt
    });
  }

  public render() {
    return <div id="app">{this.state.startedAt}</div>;
  }
}

render(<App />, document.getElementById("root"));
