import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, QrCode } from "lucide-react"
import QRCode from "qrcode"

export default function QRGenerator() {
  const [text, setText] = useState("")
  const [size, setSize] = useState("200")
  const [qrCode, setQrCode] = useState("")

  const generateQR = async (value) => {
    try {
      const url = await QRCode.toDataURL(value || " ", {
        width: Number.parseInt(size),
        margin: 1,
      })
      setQrCode(url)
    } catch (err) {
      console.error(err)
    }
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
    generateQR(e.target.value)
  }

  const handleSizeChange = (value) => {
    setSize(value)
    generateQR(text)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.download = "qrcode.png"
    link.href = qrCode
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <Label htmlFor="text">Text or URL</Label>
          <Input
            id="text"
            placeholder="Enter text or URL to generate QR code"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Size (px)</Label>
            <Select value={size} onValueChange={handleSizeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="100">100 x 100</SelectItem>
                <SelectItem value="200">200 x 200</SelectItem>
                <SelectItem value="300">300 x 300</SelectItem>
                <SelectItem value="400">400 x 400</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
        </div>
        <div className="flex items-center justify-center p-4 bg-muted rounded-lg">
          {qrCode ? (
            <img src={qrCode || "/placeholder.svg"} alt="Generated QR Code" className="max-w-full" />
          ) : (
            <div className="flex items-center justify-center w-[200px] h-[200px] bg-muted-foreground/20 rounded">
              <QrCode className="w-10 h-10 text-muted-foreground" />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleDownload} disabled={!qrCode}>
          <Download className="w-4 h-4 mr-2" />
          Download QR Code
        </Button>
      </CardFooter>
    </Card>
  )
}

