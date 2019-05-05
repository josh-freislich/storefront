
import {
    formatMoney,
    sumMoney
} from '../index';

describe('formatMoney', () => {
  it('simply formats values well', () => {
    expect(formatMoney('0.00')).toBe('0.00');
    expect(formatMoney(0)).toBe('0.00');
    expect(formatMoney(0.1)).toBe('0.10');
    expect(formatMoney(0.01)).toBe('0.01');
    expect(formatMoney(0.001)).toBe('0.00');
    expect(formatMoney(1)).toBe('1.00');
    expect(formatMoney(100)).toBe('100.00');
    expect(formatMoney(10000)).toBe('10,000.00');
    expect(formatMoney(1e9)).toBe('1,000,000,000.00');
    expect(formatMoney(null)).toBe('0.00');
  });
});

describe('sumMoney', () => {
  it('simply sums values well', () => {
    expect(sumMoney('0.00', '1.00', '2.00')).toBe('3.00');
    expect(sumMoney('-1.00', '2.00')).toBe('1.00');
    expect(sumMoney('-1.00', '1.00')).toBe('0.00');
    expect(sumMoney('1.00', '10.00', '100.00')).toBe('111.00');
    expect(sumMoney('1.00', '10.22', '100.33')).toBe('111.55');
    expect(sumMoney('-0.33', '0.00', '0.33')).toBe('0.00');
    expect(sumMoney(-0.33333, 0, 0.33333)).toBe('0.00');
    expect(sumMoney(0.2, 0.3)).toBe('0.50');
    expect(sumMoney(0.3, -0.1)).toBe('0.20');
    expect(sumMoney(NaN, 2)).toBe('2.00');
    expect(sumMoney(null, 2)).toBe('2.00');
    expect(sumMoney(false, 2)).toBe('2.00');
  });
});
