import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import AuctionItems  from '../components/AuctionItems';


configure({ adapter: new Adapter() });

describe('<AuctionItems />', () => {
  it('should render one container with the class of auction && card', () => {
    const wrapper = shallow(<AuctionItems data={mockData} />);
    expect(wrapper.find('.auction')).to.have.lengthOf(1);
    expect(wrapper.find('.card')).to.have.lengthOf(1)
  });

  it('should render a bid counter equal to 2', () => {
    const wrapper = shallow(<AuctionItems data={mockData} />);
    expect(wrapper.find('.bid-counter').text()).to.be.equal('2');
  });
});

const mockData = {"id":1,"item":"Interdimensional Goggles","description":"See what could of been.","imageName":"interdimensional_goggles.png","startingPrice":75.0,"bids":2,"currentBid":35.0,"sold":false,"expiration":46}
