import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    className: 'dark-mode-container',
    title: 'heading',
    mode: 'Light Mode',
  }

  onChangeToLight = () => {
    this.setState(prevstate => {
      return {
        className: 'light-mode-container',
        title: 'dark-heading',
        mode: 'Dark Mode',
      }
    })
  }

  onChangeToDark = () => {
    this.setState(prevstate => {
      return {
        className: 'dark-mode-container',
        title: 'heading',
        mode: 'Light Mode',
      }
    })
  }

  render() {
    const {className,title, mode} = this.state

    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className={title}>Click To Change Mode</h1>
          {mode === 'Dark Mode' ? (
            <button
              className="button"
              onClick={this.onChangeToDark}
              type="button"
            >
              {mode}
            </button>
          ) : (
            <button
              className="button"
              onClick={this.onChangeToLight}
              type="button"
            >
              {mode}
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
