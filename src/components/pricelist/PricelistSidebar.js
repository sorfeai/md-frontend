import React, { Component } from 'react'
import styles from './../../styles/components/pages/Pricelist.css'

class PricelistSidebar extends Component {
  render() {
    const {
      links,
      active,
      onLinkClick,
    } = this.props

    return (
      <div className={styles['nav-bar']}>
        <ul>
          {links.map(title => {
            const isActive = active === title
            const className = isActive
              ? styles['nav-bar-link--active']
              : styles['nav-bar-link']

            return (
              <li
                key={title}
                href="#"
                className={className}
              >
                <a href="#" onClick={e => onLinkClick(e, title)}>
                  {_.capitalize(title)}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default PricelistSidebar