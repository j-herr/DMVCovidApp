import React from 'react';
import ReactDOM from 'react-dom'
import AboutCovid19 from './AboutCovid19'
import Home from './Home'

test('AboutCovid19 renders without crashing, renders the correct content', () => {
    const root = document.createElement('div');
    ReactDOM.render(<AboutCovid19 />, root);

    expect(root.querySelector(".text").textContent).toBe("Social Distancing");
    expect(root.querySelector("a").href).toBe("https://www.cdc.gov/coronavirus/2019-ncov/index.html");
});

test('Homepage renders without crashing, renders the correct content', () => {
  const root = document.createElement('div');
  ReactDOM.render(<Home />, root);

  expect(root.querySelector("h1").textContent).toBe("Stay informed during the pandemic");
  expect(root.querySelector("li").textContent).toBe("About Covid 19");
});