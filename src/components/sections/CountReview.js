import React, { Component } from 'react'
import styles from './../../styles/components/sections/CountReview.css'
import FontAwesome from 'react-fontawesome'

import TextInput from './../common/TextInput'
import Button from './../common/Button'
import Container from './../Container'
import CallbackPopup from './../CallbackPopup'
import ChangingReviews from './../ChangingReviews'

class CountReview extends Component {
  state = { callbackForm: false }

  handleBtnCLick = (e) => {
    e.nativeEvent.preventDefault()
    e.nativeEvent.stopImmediatePropagation()

    if (this.state.callbackForm)
      return

    this.setState(prevState => ({
      callbackForm: true
    }))
  }

  renderPopupForm() {
    return (
      <div className={styles['popup-wrapper']}>
        <CallbackPopup
          onClose={() => {
            this.setState(prevState => ({
              callbackForm: false
            }))
          }}
        />
      </div>
    )
  }

  render() {
    const { callbackForm } = this.state

    return (
      <div className={styles['background']}>
        <Container>
          <div className={styles['inner']}>
            <div className={styles['left-col']}>
              <h3 className={styles['heading']}>
                Узнать стоимость лечения
              </h3>
              <div className={styles['count-price']}>
                <div className={styles['count-inner']}>
                  <div className={styles['input-group']}>
                    <div className={styles['problem-input']}>
                      <TextInput
                        type='textarea'
                        name='problem-desc'
                        label='Опишите вашу проблему'
                        rows='6'
                      />
                    </div>
                  </div>
                  <div  className={styles['count-btn']}>
                    <Button onClick={this.handleBtnCLick}>
                      Рассчитать
                    </Button>
                    {callbackForm && this.renderPopupForm()}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles['right-col']}>
              <div className={styles['reviews']}>
                <h3 className={styles['heading']}>
                  О нас пишут
                </h3>
                <ChangingReviews
                  api='/reviews'
                  interval={10000}
                  maxLength={25}
                />
              </div>
              <div className={styles['socials']}>
                {/* <h3 className={styles['heading']}>
                  Мы в соцсетях
                </h3> */}
                {/* <ul className={styles['social-icons']}>
                  <li>
                    <a href="#">
                      <FontAwesome size='2x' name='vk' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesome size='2x' name='instagram' />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default CountReview
