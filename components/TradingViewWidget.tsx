'use client'

import { useEffect, useRef } from 'react'

export function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      const script = document.createElement('script')
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
      script.type = 'text/javascript'
      script.async = true
      script.innerHTML = `
  {
    "width": "100%",
    "height": "400",
    "symbol": "BITSTAMP:BTCUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "hide_top_toolbar": false,
    "hide_legend": false,
    "save_image": false,
    "container_id": "tradingview_chart",
    "allow_symbol_change": true,
    "studies": [],
    "show_popup_button": false,
    "popup_width": "1000",
    "popup_height": "650",
    "timeframes": [
      "1H",
      "24H",
      "7D",
      "1M",
      "3M",
      "6M",
      "1Y",
      "ALL"
    ],
    "grid_color": "#F0F3FA",
    "line_color": "#2962FF"
  }`
      container.current.appendChild(script)
    }
  }, [])

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div id="tradingview_chart" />
    </div>
  )
}

