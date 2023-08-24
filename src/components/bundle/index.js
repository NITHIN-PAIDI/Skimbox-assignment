import {Component} from 'react'
import './index.css'

class Bundle extends Component {
  state = {
    clickedSection: null,
  }

  handleSectionClick = () => {
    this.setState({
      backgroundColor: 'pink',
      buttonColor: 'pink',
    })
  }

  handleSectionClick = sectionName => {
    this.setState({
      clickedSection: sectionName,
    })
  }

  render() {
    const {clickedSection} = this.state
    return (
      <div className="bg-container">
        <div className="heading-section">
          <hr className="line" />
          <h1 className="main-heading">Bundle & save</h1>
          <hr className="line" />
        </div>
        <div className="pair-1-section">
          <div className="first-part">
            <button
              type="button"
              className={`pair-1-section circle-button ${
                clickedSection === 'pair1' ? 'pink-background' : ''
              }`}
              onClick={() => this.handleSectionClick('pair1')}
            >
              n
            </button>
            <div>
              <p className="price">1 Pair</p>
              <p className="price">DKK 195.00</p>
            </div>
          </div>
          <div className="discount-container">
            <p className="discount">50% off</p>
          </div>
        </div>
        <div className="pair-2-section">
          <div className="description">
            <div className="first-part-1 first-part">
              <button className="circle-button" type="button">
                n
              </button>
              <div>
                <p className="price">2 Pair</p>
                <p className="price">DKK 345.00</p>
              </div>
              <p className="line-through-element">DKK 195.00</p>
            </div>
            <div className="discountforpair2">
              <p className="most-popular">Most Popular</p>
              <p>40% off</p>
            </div>
          </div>
          <div className="measurements-section">
            <div className="section">
              <label htmlFor="sizes" className="label-el">
                size
              </label>
              <label htmlFor="sizes" className="label-el">
                colour
              </label>
            </div>
            <div className="options">
              <p>#1</p>
              <select id="sizes" className="select-element">
                <option>S</option>
                <option>M</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <br />

              <br />
              <select
                id="colors"
                className="select-element"
                placeholder="Color"
              >
                <option>red</option>
                <option>blue</option>
                <option>green</option>
                <option>maroon</option>
              </select>
            </div>
            <div className="options">
              <p>#2</p>
              <select id="sizes" className="select-element">
                <option>S</option>
                <option>M</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
              <br />

              <br />
              <select
                id="colors"
                className="select-element"
                placeholder="Color"
              >
                <option>red</option>
                <option>blue</option>
                <option>green</option>
                <option>maroon</option>
              </select>
            </div>
          </div>
        </div>
        <div className="pair-1-section part-3">
          <div className="first-part">
            <button className="circle-button" type="button">
              n
            </button>
            <div>
              <p className="price">3 Pair</p>
              <p className="price">DKK 528.00</p>
            </div>
          </div>
          <div className="discount-container">
            <p className="discount">60% off</p>
          </div>
        </div>
        <div className="bottom-theory">
          <p className="delivery">Free 2 Day Shipping</p>
          <p>Total : DKK 360.00</p>
        </div>
        <div>
          <button className="button-el" type="button">
            + Add To Cart
          </button>
          <div className="sponser-container">
            <div className="copyrights">c</div>
            <p className="powered-by">Power by pumper</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Bundle
