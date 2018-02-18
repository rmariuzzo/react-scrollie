import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

/**
 * The Scrollie component.
 */
class Scrollie extends Component {
  /**
   * Construct a Scrollie object instance.
   * @param {Object} props
   */
  constructor(props) {
    super(props)
    this.state = {
      startX: false,
      endX: false,
      startY: false,
      endY: false
    }
    this.updateScrollInfo = debounce(this.updateScrollInfo.bind(this), 50)
  }

  /**
   * When a Scrollie component mounts listen to scroll events and immediately update scroll info.
   */
  componentDidMount() {
    this.root.addEventListener('scroll', this.updateScrollInfo)
    this.updateScrollInfo()
  }

  /**
   * When a Scrollie component will unmount then unlisten to scroll events.
   */
  componentWillUnmount() {
    this.root.removeEventListener('scroll', this.updateScrollInfo)
  }

  /**
   * Render the Scrollie component.
   */
  render() {
    const { children, component, ...more } = this.props
    const Component = component

    return (
      <Component {...more} ref={el => (this.root = el)}>
        {children(this.state)}
      </Component>
    )
  }

  /**
   * Update scroll info based on the current rendered node.
   */
  updateScrollInfo() {
    const { scrollWidth, scrollLeft, clientWidth } = this.root
    const startX = scrollLeft === 0
    const endX = clientWidth + scrollLeft >= scrollWidth

    const { scrollHeight, scrollTop, clientHeight } = this.root
    const startY = scrollTop === 0
    const endY = clientHeight + scrollTop >= scrollHeight

    this.setState({ startX, endX, startY, endY })
  }
}

Scrollie.propTypes = {
  children: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

Scrollie.defaultProps = {
  component: 'div'
}

export default Scrollie
