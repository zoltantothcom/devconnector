import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
  state = {
    count: 5,
    sort: 'stars',
    order: 'desc',
    repos: [],
  };

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, order } = this.state;

    fetch(
      `https://api.github.com/search/repositories?q=user:${username}&sort=${sort}&order=${order}&per_page=${count}`,
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.github) {
          this.setState({ repos: data.items });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a href={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Starts: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div ref="github">
        <h3 className="mb-4 mt-4">Popular Github repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
};

export default ProfileGithub;
