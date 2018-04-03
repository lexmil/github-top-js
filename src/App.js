import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchRepos } from './redux/repos';
import './App.css';
import { Link, Stars } from './components';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import LinearProgress from 'material-ui/LinearProgress';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class App extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    const { data, isFetch } = this.props;

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            style={{ position: 'fixed', top: 0 }}
            title="GitHub JS Top"
            iconElementLeft={
              <IconButton onClick={() => this.props.fetchRepos()}>
                <NavigationRefresh />
              </IconButton>}
          />

          { isFetch && <LinearProgress mode="indeterminate" color="grey"/> }

          <Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>#</TableHeaderColumn>
                <TableHeaderColumn>Repository</TableHeaderColumn>
                <TableHeaderColumn>Forks</TableHeaderColumn>
                <TableHeaderColumn>Rate</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              { data.items && data.items.map((item, index) => (
                <TableRow key={item.id}>
                  <TableRowColumn>{index + 1}</TableRowColumn>
                  <TableRowColumn className="repository">
                    <Link
                      avatar={item.owner.avatar_url}
                      ownerUrl={item.owner.url}
                      ownerName={item.owner.login}
                      repoUrl={item.html_url}
                      repoName={item.name}
                    />
                  </TableRowColumn>
                  <TableRowColumn>{item.forks_count}</TableRowColumn>
                  <TableRowColumn><Stars count={item.stargazers_count}/></TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired,
  isFetch: PropTypes.bool.isRequired,
  fetchRepos: PropTypes.func
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { fetchRepos })(App);
