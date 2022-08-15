import React from 'react';
import {ChildComponent} from '../components/ChildComponent'

export function ParentComponent() {
    const greetParent = (childName) => {
        return alert(`Hello parent ${childName}`)
    }
    return <ChildComponent greetHanlder={greetParent}/>
}