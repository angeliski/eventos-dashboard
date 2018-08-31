import React, { Component } from 'react'
import FaIcon from '@fortawesome/react-fontawesome'
import faSlidersH from '@fortawesome/fontawesome-free-solid/faSlidersH'
import styled from 'styled-components'

import { Checkbox, Input } from 'components'
import { blueLight, gray } from 'utils/colors'

import Dropdown from './dropdown'
import Row from './row'
const StyledFilter = styled.div`
  border: solid 1px ${gray};
  width: 200px;
  border-radius: 5px;
  padding: 15px 15px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  position:relative;

  &.active{
    border-color:${blueLight};
    >.label-filter{
      color:${blueLight};
    }
  }

  >.label-filter{
    color:${gray};
  }

  >.icon-filter{
    cursor:pointer;
  }

  .input-container{
    padding-right: 15px;
  }
`

class Filter extends Component {
  constructor () {
    super()
    this.state = {
      visible: true
    }
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    const className = this.state.visible ? 'active' : ''
    const colorIcon = this.state.visible ? blueLight : gray

    return (
      <StyledFilter className={className}>
        <span className='label-filter'>Filtro</span>
        <FaIcon className='icon-filter' onClick={this.toggle} size='lg' icon={faSlidersH} color={colorIcon} />

        <Dropdown visible={this.state.visible} >

          <Row title='Status'>

            <div className='input-container'>
              <Checkbox label='Aprovado' />
            </div>

            <div className='input-container'>
              <Checkbox label='Reprovado' />
            </div>

          </Row>

          <Row title='Data'>
            <div className="input-container">
              <Input type='date' />
            </div>
            <Input type='date' />
          </Row>

        </Dropdown>

      </StyledFilter>
    )

  }
}

export default Filter
