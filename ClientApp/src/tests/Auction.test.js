import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Auctions  from '../components/Auctions';


configure({ adapter: new Adapter() });

describe('<Auctions />', () => {
  it('should render one container with the class of Auctions', () => {
    const wrapper = shallow(<Auctions />);
    expect(wrapper.find('.auctions')).to.have.lengthOf(1)
  });

  it('should render the auctions container with an additional class called container', () => {
    const wrapper = shallow(<Auctions />);
    expect(wrapper.find('.auctions').hasClass('container')).to.equal(true);
  });

  it('should by default load display a loading class', () => {
    const wrapper = shallow(<Auctions />);
    expect(wrapper.find('.loading')).to.have.lengthOf(1);
  });

  it('should when data is injected load a component class of AuctionItems', () => {
    const realUseState = React.useState
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState(mockData))

    const wrapper = shallow(<Auctions />);
    expect(wrapper.find('AuctionItems')).to.have.length(1);
  });
});

const mockData = [{"id":1,"item":"Interdimensional Goggles","description":"See what could of been.","imageName":"interdimensional_goggles.png","startingPrice":75.0,"bids":2,"currentBid":35.0,"sold":false,"expiration":46}]
