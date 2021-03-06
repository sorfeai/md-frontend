import React, { Component } from 'react'
import validate from 'validate.js'
import styles from './../styles/components/AskQuestionPopup.css'

import FontAwesome from 'react-fontawesome'
import Form from './containers/Form'
import TextInput from './common/TextInput'
import Paragraph from './common/Paragraph'
import Button from './common/Button'
import RatingInput from './common/RatingInput'
import Popup from './Popup'

import { Questions as api } from './../agent'

class AskQuestionPopup extends Component {
  onFormSubmit = data => {
    api.create(data)
  }

  render() {
    const constraints = {
      author: {
        presence: { allowEmpty: false }
      },
      question: {
        presence: { allowEmpty: false }
      }
    }

    return (
      <div className={styles['wrapper']}>
        <Popup {...this.props}>
          <Form
            withLoading
            loadingTime={2500}
            onSubmit={this.onFormSubmit}
            constraints={constraints}
          >
            <div className={styles['name-input']}>
              <TextInput
                alt
                label='Имя'
                name='author'
              />
            </div>
            <TextInput
              alt
              type='textarea'
              rows={4}
              label='Вопрос'
              name='question'
            />
            <div className={styles['hint']}>
              <Paragraph type='small' >
                Ответ на ваш вопрос будет опубликован в течение суток.
              </Paragraph>
            </div>
            <Button
              formSubmit
              type='popup'
              successText='Спасибо!'
            >
              Отправить
            </Button>
          </Form>
        </Popup>
      </div>
    )
  }
}

export default AskQuestionPopup
