import React from 'react'
import styles from './text-inputs.module.scss'

export const TextInputs = (props) => {
    return (
        <div>
            <div className={styles.input_container} style={props.styles}>

                <div className={styles.input_field}>
                    <input type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        // onChange={(e) => props.onChange(e.target.value)}
                    />
                </div>
            </div>


            {props.required && <div><small className={styles.input_err}>{props.err_msg ?? "required"}</small></div>
            }
        </div>
    )
}
