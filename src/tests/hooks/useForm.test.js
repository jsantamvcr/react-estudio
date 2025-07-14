/* eslint-disable no-undef */

import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../hooks/index.js';

describe('Test useForm hook', () => {

    const initialForm = {
        name: 'Juan Carlos',
        email: 'asdfasdf@safasd.com'
    }

    test('should return default values', () => {

        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    // test for onInputChange change name value
    test('should change name value', () => {

        const newValue = 'Juan Carlos 2';
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;

        // act simulate input change
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('should change name value', () => {

        const newValue = 'Juan Carlos';
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm } = result.current;

        // act simulate input change
        act(() => {
            onResetForm();
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

})