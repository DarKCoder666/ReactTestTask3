import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CompetitionCard extends Component {
    render() {
        return (
            <div className="competition-card">
                <Link to={`/${this.props.data.id}`}>
                    <div className="competition-card-body">
                        <div>
                            <h1 className="competition-card-title">{this.props.data.name}</h1>
                            <div className="competition-card-description">{this.props.data.description}</div>
                        </div>
                        <div className="competition-card-image">
                            <img src={this.props.data.imgSrc} alt="Logo" />
                        </div>
                    </div>
                </Link>

                <div className="competition-card-footer">
                    <div className="competition-card-date">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABgCAYAAACtxXToAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVhSURBVHgB7ZxBdts2EIYHoF6T7nQE9gRxTxApOUDj1nHsbuKcIM0JKp8gzyeIu4mc2K6cfRzpBnVPUPYG7q7OizjFUIZK1RIGIEEKKvktovfsoYT/FwAOMeOIk7NPCA1GQsNpDYCG0xoADac1ABpOhwvY23kkYIPh8px2CUDDaQ2AhtMaAA2nNQAaTmsAFzAajbvwP4YMSEwBfwNsrAHvR+MtJiQhA65NEXIK3JsEC06nMROSSPWk8LvxTdK0BxvKFETPGIDwlxSIV8YgKb6DDUWCeewp4ETNAGk2ACAeno57sGHcjjk2xQilXe4/7U+A2QeEwJ9hwxASnjMhCWnPboNqKvzCBPc2aRYMR+MYEA+MQUJM6CUzQKC8AAY1C95sSk4gpjjmYtTd7Sh7pX9ul8GEuSa+SSH4pXByPn4NzNpXTHZ3+9neN88EEcUhcCD+9O58HKwJ2djUGLm4vNa5AZazQF2MgxBNoDHR2NhAIY5vtWYsPAtgJF4Ac0fI4gIzwVq80oYSFmb6ggH72/0kFRZLAcIxwUE8pIiHpDH/s6Vn/sPTj8dCSO4+OnsDIQbPfuhbmeYbF/FK/dHe7uM7+8PSx+H7nYgCuQwxY10zwUk8wtUy8cRSA7a3+9f3ItGHQE1wFX+vk2lZirHsRYnPzSypsHokrmM5FBFPX+iqELbuF5IJvsUTVoXPEEyoQjxhXfldpwlViSecSt/rMKFK8YRz7b9OE6oWTxRqfqjDhDrEZ2ODgriaoJ7A+vmHEBNvzz4+kSBHNrFlxBOFK0OuyZLLgYoS/9omrqz42WeVwNGE+PN02uOChueXB8AfaHgRT5SuDbqYgCgPuBj17fPH8J7Ezz7PA9YmCHgADGrji80B/sQT3qrDORNMxMBj3FSxI7Z9iSe8lsfrKKTetzixcsGbAbTDiy9ovnWh1WaZmH558wXHPo/nvRiQ5QRqYGqNcznBn8zvKWni9pEtnyaUNsBBPIgo4pMbBK5K5dWEUga4iFckz75/yIr7KsqO5hMuzpcJhQ1wFK/qj+KVTRzt8CptfmET68OEQga4ilf39sMfd/oXYAk9M9A1VsElTSj2OOwofv/p4wEUYHh6OVCbot1hax2Pw3WK11RtgtuRWM3iNVWaYH8ouibxmqpMsDsWX7N4TRUm8IWRQMRrfJuw0oAQxWt8mrAyDwhVPEGf5StPWGpA1mcTqHiNswnTdOk54x0D3p+NX9r02RDrEq9xMgHEwdvTyzu6FvYA6q8TU/wNLA421i0+j8OecI2R+DbfJbIwA8SsDW6jxBMOM6GrvuA3+R/MZwB1gqqze7bBMDTxeWxnQr5IM58BVv3AKR6FKp6gsaWAR1xcXmtmwG0fcI+5LlnVZxMSX0dyAPyByrz3edYrzHdWUw8hd+QdBLYHKgLTJ/Q6WwKIPXO0OP5vf13IWHW9SpF96Z3ZVDBXYzC1OKi0gLKxzym8xJnhMfxbKKE09UqCuJhG8MGH2dQPrNZ6zxDSzTb+E0oOhDBVY5O9nUffQAmy/IJusVwPv0bNOGppLWvEydmnP8BQjUoRX0kh5UMwkeIHKMG7X8fPs+TKVjyhYukauhZKoO4IxrFLKR9INR2NiY8yaAIFybo8UjyGYiWzLl1bpgEzApwYA1Lcok0wNsWoqZtAAZxaXAyU6UJNo4irMnVZA/RfVrjgS7ymqAkWhdTY+x9P+xavKWKCzZmgVwOqEq8psxxW4c2AqsVrfJvgxYC6xGt8mlDagLrFa3yZUMqAdYnX+DChsAHrFq8pa0IhA0IRryljgrMBoYnXFDXByYBQxWuKmCDa/1e44bQGQMNpDYCG0xoADecf2GjoX7/J2KgAAAAASUVORK5CYII=" alt="IMG" />
                        {this.props.data.dates}
                    </div>
                    <div className="competition-card-fund">
                        <img src="data:image/png;base64,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" alt="Fund" />
                        {this.props.data.fund}
                    </div>
                </div>
            </div>
        )
    }
}
