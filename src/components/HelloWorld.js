
import {reverseArray} from '../common/util';

function HelloWorld() {
    const sourceArr = ['1','2'];
    reverseArray(sourceArr);
    return(
        <div>
            this is my first component, Hello world!
        </div>
    )
}

export default HelloWorld;