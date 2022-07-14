import React from "react";

class Calculator extends React.Component {

    render() {
        return (
            <div className = 'calculator'>
                <div className="calculator__header">
                    <h1>Fake Calculator</h1>
                </div>
                <div className="calculator__main">
                    <div className="calculator__main__display-container">
                        <span className='calculator__main__display-container__display-result'>0</span>
                        <span className='calculator__main__display-container__display-expression'>0</span>
                    </div>
                    <div className="calculator__main__buttons-container">
                        <button className="calculator__main__buttons-container__clear" id='clear'>AC</button>
                        <button className="calculator__main__buttons-container__operator" id='divine'>/</button>
                        <button className="calculator__main__buttons-container__operator" id='multiply'>x</button>
                        <button className='calculator__main__buttons-container__numbers' id='seven'>7</button>
                        <button className='calculator__main__buttons-container__numbers' id='eight'>8</button>
                        <button className='calculator__main__buttons-container__numbers' id='nine'>9</button>
                        <button className="calculator__main__buttons-container__operator" id='minus'>-</button>
                        <button className='calculator__main__buttons-container__numbers' id='four'>4</button>
                        <button className='calculator__main__buttons-container__numbers' id='five'>5</button>
                        <button className='calculator__main__buttons-container__numbers' id='six'>6</button>
                        <button className="calculator__main__buttons-container__operator" id='add'>+</button>
                        <button className='calculator__main__buttons-container__numbers' id='one'>1</button>
                        <button className='calculator__main__buttons-container__numbers' id='two'>2</button>
                        <button className='calculator__main__buttons-container__numbers' id='three'>3</button>
                        <button className='calculator__main__buttons-container__numbers' id='zero'>0</button>
                        <button className='calculator__main__buttons-container__decimal' id='decimal'>.</button>
                        <button className="calculator__main__buttons-container__operator" id='equal'>=</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Calculator;