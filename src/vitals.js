import {
  getLCP,
  getFID,
  getCLS,
  getTTFB,
  getFCP
} from 'web-vitals';

import Counter from './counter';

export default () => {
  const reportVital = ({
    name,
    value
  }) => {
    switch (name) {
      case 'LCP':
        const largestContentfulPaint = new Counter('Largest Contentful Paint')
        largestContentfulPaint.value = value
        largestContentfulPaint.publish()
        break
      case 'FID':
        const firstInputDelay = new Counter('First Input Delay')
        firstInputDelay.value = value
        firstInputDelay.publish()
        break
      case 'CLS':
        const layoutShift = new Counter('Cumulative Layout Shift')
        layoutShift.value = value
        layoutShift.publish()
        break
      case 'TTFB':
        const firstByte = new Counter('Time to First Byte')
        firstByte.value = value
        firstByte.publish()
        break
      case 'FCP':
        const firstPaint = new Counter('First Contentful Paint')
        firstPaint.value = value
        firstPaint.publish()
        break
    }
  }

  getCLS(reportVital);
  getFID(reportVital);
  getLCP(reportVital);
  getTTFB(reportVital);
  getFCP(reportVital);
}
