import { memo } from 'react';

export const Small = memo(({ value, otherProp }) => {

    console.log('Small component rendered', otherProp);
    return (
        <>
            <small>{value}</small>
        </>
    );
});