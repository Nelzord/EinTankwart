
var px, py 

function setup() {
    createCanvas(489, 680);
    px = 0
    x = 1
    py = 590 
    
}


function draw() {
    background(255)

    push()
    translate(px, py)
    scale(x)
    strokeWeight(0)
    rect(0, 300-py, 89, 294)

   
    
   beginShape()
    fill(255)
    curveVertex(20, 304-py)
    curveVertex(0, 310-py)
    curveVertex(66, 314-py) 
    curveVertex(66, 367-py)
    curveVertex(0, 367-py)
    curveVertex(20, 367-py)
    curveVertex(0, 367-py)
    curveVertex(0, 360-py)
    curveVertex(5, 367-py)
    endShape()


    

    fill(97, 142, 277)
    ellipse(25, 268-py, 120, 70 )
    fill(255)
    ellipse(22, 268-py, 86, 54)
  
    beginShape()
    
    stroke(color(76, 86, 24))
    strokeWeight(4)
    curveVertex(85,320-py)
    curveVertex(82, 322-py)
    curveVertex(129, 374-py)
    curveVertex(163, 553-py)
    curveVertex(245, 600-py)
    curveVertex(317, 573-py)
    curveVertex(362, 477-py)
    curveVertex(375, 475-py)
    curveVertex(380, 471-py)  
    endShape(OPEN)
  
    pop()
    
    beginShape()
    stroke(color(76, 86, 24))
    strokeWeight(9.4)
    curveVertex(380, 471)  
    curveVertex(385, 460)
    curveVertex(461, 526)
    endShape(CLOSE)




    beginShape()
    fill(88, 77, 105)
    strokeWeight(0)
    curveVertex(333, 630)
    curveVertex(377, 613)
    curveVertex(333, 505)
    curveVertex(308, 501)
    curveVertex(282, 525)
    endShape(CLOSE)
    beginShape()
    vertex(306, 565)
    curveVertex(292, 597)
    curveVertex(252, 585)
    curveVertex(280, 504)
    fill(88, 77, 105)
    endShape(CLOSE)
  
    beginShape()
    fill(88, 77, 105)
    strokeWeight(0)
    curveVertex(278,517)
    curveVertex(265, 479)
    curveVertex(273, 402)
    
    curveVertex(267, 300)
    curveVertex(313 , 300)
    curveVertex(353,376)
    curveVertex(356 , 417)
    curveVertex(342,501)
    endShape(CLOSE)
    
  
  beginShape()
    fill(88, 77, 105)
    strokeWeight(0)
    curveVertex(305,231)
    curveVertex(318, 204)
    curveVertex(346 ,204)
    curveVertex(369,191)
    curveVertex(376,197)
    curveVertex(325, 223)
    curveVertex(304 ,231)
    curveVertex(304 ,210)
    curveVertex(318 ,204)
    endShape(CLOSE)
    
  beginShape()
  fill(255, 138, 141)
  curveVertex(305,230)
  curveVertex(329,214)
  curveVertex(353 ,217)
  curveVertex(357 , 235)
  curveVertex(362 , 236)
  curveVertex(365 , 242)
  curveVertex(359 , 242)
  curveVertex(358 , 259)
  curveVertex(347 , 266)
  curveVertex(345 , 283)
  curveVertex(326 , 286)
  curveVertex(306 , 275)
  endShape(CLOSE)
  
  beginShape()
    fill(88, 77, 105)
    strokeWeight(0)
    curveVertex(305,231)
    curveVertex(318, 204)
    curveVertex(346 ,204)
    curveVertex(369,191)
    curveVertex(376,197)
    curveVertex(325, 223)
    curveVertex(304 ,231)
    curveVertex(304 ,210)
    curveVertex(318 ,204)
    endShape(CLOSE)
  
  beginShape()
    fill(88, 77, 105)
    strokeWeight(0)
    curveVertex(300, 279)
    curveVertex(262 , 297)
    curveVertex(236 , 342)
    curveVertex(225 , 395)
    curveVertex(226 , 455)
    curveVertex(233 , 459)
    curveVertex(262 , 457)
    curveVertex(263, 405)
    endShape(CLOSE)
  
  beginShape()
    fill(88, 77, 105)
    strokeWeight(0)
    curveVertex(329 , 320)
    curveVertex(359 , 421)
    curveVertex(374, 460)
    curveVertex(389 , 457)
    curveVertex(402 , 440)
    curveVertex(383 , 408)
    curveVertex(381 , 341)
    curveVertex(352 , 286)
    endShape(CLOSE)
  
  beginShape()
  fill(255,138,141)
  curveVertex(236, 460)
  curveVertex(257, 460)
  curveVertex(262 , 484)
  
  curveVertex(249 , 491)
  curveVertex(236, 484)
  endShape(CLOSE)
  
  
  beginShape()
  fill(255,138,141)
  curveVertex(378, 461)
  curveVertex(402, 443)
  curveVertex(413 , 483)
  
  curveVertex(399 , 487)
  curveVertex(382, 482)
  endShape(CLOSE)

  beginShape()
  fill(228, 95, 8)
  curveVertex(253, 605)
  curveVertex(253, 590)
  curveVertex(271, 598)
  curveVertex(288, 598)
  curveVertex(304, 605)
  curveVertex(301, 614)
  curveVertex(281, 612)
  curveVertex(266, 606)
  curveVertex(265, 610)
  endShape(CLOSE)


  beginShape()
  fill(228, 95, 8)
  curveVertex(345, 621)
  curveVertex(365, 618)
  curveVertex(386, 603)
  curveVertex(401, 606)
  curveVertex(408, 611)
  curveVertex(393, 628)
  curveVertex(370, 631)
  curveVertex(371, 637)
  curveVertex(355, 652)
  endShape(CLOSE)
  fill(255)
  ellipse(459, 523, 5, 5)

  beginShape()
  fill(219,168,26)
  curveVertex(229, 506)
  curveVertex(234, 473)
  curveVertex(234, 484)
  curveVertex(241, 491)
  curveVertex(243, 502)
  endShape(CLOSE)

  beginShape()
  fill(228, 95, 8)
  curveVertex(250, 475)
  curveVertex(249, 491)
  curveVertex(258, 489)
  curveVertex(261, 483)
  curveVertex(256, 474)
  endShape(CLOSE)


  beginShape()
  fill(219,168,26)
  curveVertex(253, 474)
  curveVertex(256, 477)
  curveVertex(255, 483)
  curveVertex(252, 479)
  endShape(CLOSE)

  beginShape()
  fill(219, 168, 26)
  curveVertex(248, 492)
  curveVertex(256, 485)
  curveVertex(262, 484)
  curveVertex(265, 506)
  curveVertex(257, 509)
  curveVertex(248, 507)
  endShape(CLOSE)


  beginShape()
  fill(228, 95, 8)
  curveVertex(234, 473)
  curveVertex(236, 483)
  curveVertex(241, 489)
  curveVertex(234, 484)
  endShape(CLOSE)

  beginShape()
  fill(88, 77, 105)
  curveVertex(305, 270)
  curveVertex(293, 285)
  curveVertex(293, 304)
  curveVertex(333, 317)
  curveVertex(333, 330)
  endShape(CLOSE)
  curveVertex(333, 335)
  endShape(CLOSE)
  
  

  beginShape()
  fill(88, 77, 105)
  curveVertex(346, 272)
  curveVertex(355, 289)
  curveVertex(350, 289)
  curveVertex(346, 277)
  endShape(CLOSE)


  

  fill(140, 190, 218)
  textSize(53)
  textFont("Fjalla One")
  text("EIN", 45, 80)

  fill(140, 190, 218)
  textSize(82)

  textFont("Fjalla One")

  text("TANKWART", 87, 170)

  push()
  translate(px, py)
  scale(x)
  fill(228, 95, 8)
  textSize(25)
  textFont("Fjalla One")
  text("L  P", 8, 280-py)

fill(228, 95, 8)
  ellipse(23, 270-py, 10, 10)
  ellipse(36, 265-py, 10, 14)


}