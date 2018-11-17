import React, { Component } from 'react'

export class EventoRow extends Component {

    render() {
        return (
            <div className="inline">
                &nbsp;
                &nbsp;
                {this.props.evento.descripcion}
            </div>
        )
    }

}