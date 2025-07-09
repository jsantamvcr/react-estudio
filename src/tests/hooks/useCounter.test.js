/* eslint-disable no-undef */

import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../hooks/index.js';


describe('useCounter hook', () => {
        test('should return default values', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, increment, decrement, reset } = result.current;

                expect(counter).toBe(10);
        expect(increment).toEqual(expect.any(Function));
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Should counter equal to 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
                expect(counter).toEqual(100);
    });


        test('Should increment counter by 1', () => {
        const { result } = renderHook(() => useCounter(10));
        const { increment } = result.current;

                act(() => {
                        increment(1);
        });

        expect(result.current.counter).toEqual(11);
    });

        test('Should decrement counter by 1', () => {
        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement(1);
        })

        const updatedCounter = result.current.counter;
        expect(updatedCounter).toEqual(99);
    });

        test('Should reset counter to initial value', () => {
        const { result } = renderHook(() => useCounter(50));
        const { reset, counter } = result.current;

        act(() => {
            reset();
        });

        expect(result.current.counter).toEqual(counter);
    });
});

