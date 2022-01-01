import {
  getLCP,
  getFID,
  getCLS,
  getTTFB,
  getFCP
} from 'web-vitals';

import Counter from './counter';
import Timer from './timer';

export default () => {
  const reportVital = ({
    name,
    value
  }) => {
    switch (name) {
      case 'LCP':
        const largestContentfulPaint = new Timer('Largest Contentful Paint')
        largestContentfulPaint.value = value
        largestContentfulPaint.publish()
        break
      case 'FID':
        const firstInputDelay = new Timer('First Input Delay')
        firstInputDelay.value = value
        firstInputDelay.publish()
        break
      case 'CLS':
        const layoutShift = new Counter('Cumulative Layout Shift')
        layoutShift.value = value
        layoutShift.publish()
        break
      case 'TTFB':
        const firstByte = new Timer('Time to First Byte')
        firstByte.value = value
        firstByte.publish()
        break
      case 'FCP':
        const firstPaint = new Timer('First Contentful Paint')
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
