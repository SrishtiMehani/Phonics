 fxx=50;

function preload()
{
	imgA = loadImage("a.png")
	imgB = loadImage("b.png")
	imgC = loadImage("c.png")
	imgD = loadImage("d.png")
	imgE = loadImage("e.png")
	imgF = loadImage("f.png")
	imgG = loadImage("g.png")
	imgH = loadImage("h.png")
	imgI = loadImage("i.png")
	imgJ = loadImage("j.png")
	imgK = loadImage("k.png")
	imgL = loadImage("l.png")
	imgM = loadImage("m.png")
	imgN = loadImage("n.png")
	imgO = loadImage("o.png")
	imgP = loadImage("p.png")
	imgQ = loadImage("q.png")
	imgR = loadImage("r.png")
	imgS = loadImage("s.png")
	imgT = loadImage("t.png")
	imgU = loadImage("u.png")
	imgV = loadImage("v.png")
	imgW = loadImage("w.png")
	imgX = loadImage("x.png")
	imgY = loadImage("y.png")
	imgZ = loadImage("z.png")
    imgClear = loadImage("clear.png")
    imgButterfly = loadImage("butterfly.png")

}

function setup(){
  createCanvas(800,600);
 
  s = createSprite(24,45,30,50);
  s.addImage(imgS)
  s.scale=0.5
  
  a = createSprite(64,45,30,50);
  a.addImage(imgA)
  a.scale=0.5

  t = createSprite(104,45,30,50);
  t.addImage(imgT)
  t.scale = 0.5
  
  i = createSprite(144,45,30,50);
  i.addImage(imgI)
  i.scale = 0.5
  
  p = createSprite(184,45,30,50);
  p.addImage(imgP)
  p.scale = 0.5
  
  n = createSprite(224,45,30,50);
  n.addImage(imgN)
  n.scale = 0.5
  
  c = createSprite(260,45,30,50);
  c.addImage(imgC)
  c.scale = 0.5
  
  k = createSprite(300,45,30,50);
  k.addImage(imgK)
  k.scale = 0.5
  
  e = createSprite(340,45,30,50);
  e.addImage(imgE)
  e.scale = 0.5
  
  h = createSprite(380,45,30,50);
  h.addImage(imgH)
  h.scale = 0.5
  
  r = createSprite(420,45,30,50);
  r.addImage(imgR)
  r.scale = 0.5
  
  m = createSprite(460,45,30,50);
  m.addImage(imgM)
  m.scale = 0.5
  
  d = createSprite(500,45,30,50);
  d.addImage(imgD)
  d.scale = 0.5
  
  //second row starts

  g = createSprite(24,125,30,50);
  g.addImage(imgG)
  g.scale = 0.5

  o = createSprite(64,125,30,50);
  o.addImage(imgO)
  o.scale = 0.5

  u = createSprite(104,125,30,50);
  u.addImage(imgU)
  u.scale = 0.5

  l = createSprite(144,125,30,50);
  l.addImage(imgL)
  l.scale = 0.5

  f = createSprite(184,125,30,50);
  f.addImage(imgF)
  f.scale = 0.5

  b = createSprite(224,125,30,50);
  b.addImage(imgB)
  b.scale = 0.5

  j = createSprite(264,125,30,50);
  j.addImage(imgJ)
  j.scale = 0.5

  z = createSprite(304,125,30,50);
  z.addImage(imgZ)
  z.scale = 0.5

  w = createSprite(344,125,30,50);
  w.addImage(imgW)
  w.scale = 0.5

  v = createSprite(384,125,30,50);
  v.addImage(imgV)
  v.scale = 0.5

  y = createSprite(424,125,30,50);
  y.addImage(imgY)
  y.scale = 0.5

  x = createSprite(464,125,30,50);
  x.addImage(imgX)
  x.scale = 0.5

  q = createSprite(504,125,30,50);
  q.addImage(imgQ)
  q.scale = 0.5

 butterfly = createSprite(270, 473,700,50);
  butterfly.addImage(imgButterfly)
  butterfly.scale = 0.12







  grp = new Group ();
  
  reset = createSprite(600,500,100,30)
  reset.addImage(imgClear)
  reset.scale = 0.3
  
 
  
  
  
}


function draw(){
  //set background color 
  background("white");
  fill("white")
  rect(10,226,520,300);
  fill("black")
  
  drawSprites();
}


  
function mouseClicked()
    {
      if (mouseIsOver(s)) {
        fs = createSprite(fxx,300,30,50);
        grp.add(fs)
        fs.addImage(imgS)
        fs.scale=0.5
        fxx+=50; 
      }
      
      else if (mouseIsOver(t)) {
        ft = createSprite(fxx,300,30,50);
        grp.add(ft)
        ft.addImage(imgT)
        ft.scale=0.5
        fxx+=50; 
      }
      
      else if (mouseIsOver(a)) {
        fa = createSprite(fxx,300,30,50);
        grp.add(fa)
        fa.addImage(imgA)
        fa.scale=0.5
        fxx+=50; 
      }
      
      else if (mouseIsOver(b)) {
        fb = createSprite(fxx,300,30,50);
        grp.add(fb)
        fb.addImage(imgB)
        fb.scale=0.5
        fxx+=50; 
      }
      else if (mouseIsOver(c)) {
        fc = createSprite(fxx,300,30,50);
        grp.add(fc)
        fc.addImage(imgC)
        fc.scale=0.5
        fxx+=50; 
      }
      
      
      
      else if (mouseIsOver(d)) {
        fd = createSprite(fxx,300,30,50);
        grp.add(fd)
        fd.addImage(imgD)
        fd.scale=0.5
        fxx+=50; 
      }
      
       
      else if (mouseIsOver(e)) {
        fe = createSprite(fxx,300,30,50);
        grp.add(fe)
        fe.addImage(imgE)
        fe.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(f)) {
        ff = createSprite(fxx,300,30,50);
        grp.add(ff)
        ff.addImage(imgF)
        ff.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(g)) {
        fg = createSprite(fxx,300,30,50);
        grp.add(fg)
        fg.addImage(imgG)
        fg.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(h)) {
        fh = createSprite(fxx,300,30,50);
        grp.add(fh)
        fh.addImage(imgH)
        fh.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(i)) {
        fi = createSprite(fxx,300,30,50);
        grp.add(fi)
        fi.addImage(imgI)
        fi.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(j)) {
        fj = createSprite(fxx,300,30,50);
        grp.add(fj)
        fj.addImage(imgJ)
        fj.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(k)) {
        fk = createSprite(fxx,300,30,50);
        grp.add(fk)
        fk.addImage(imgK)
        fk.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(l)) {
        fl = createSprite(fxx,300,30,50);
        grp.add(fl)
        fl.addImage(imgL)
        fl.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(m)) {
        fm = createSprite(fxx,300,30,50);
        grp.add(fm)
        fm.addImage(imgM)
        fm.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(n)) {
        fn = createSprite(fxx,300,30,50);
        grp.add(fn)
        fn.addImage(imgN)
        fn.scale= 0.5;
        fxx+=50; 
      }
       
      else if (mouseIsOver(o)) {
        fo = createSprite(fxx,300,30,50);
        grp.add(fo)
        fo.addImage(imgO)
        fo.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(p)) {
        fp = createSprite(fxx,300,30,50);
        grp.add(fp)
        fp.addImage(imgP)
        fp.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(q)) {
        fq = createSprite(fxx,300,30,50);
        grp.add(fq)
        fq.addImage(imgQ)
        fq.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(r)) {
        fr = createSprite(fxx,300,30,50);
        grp.add(fr)
        fr.addImage(imgR)
        fr.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(u)) {
        fu = createSprite(fxx,300,30,50);
        grp.add(fu)
        fu.addImage(imgU)
        fu.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(v)) {
        fv = createSprite(fxx,300,30,50);
        grp.add(fv)
        fv.addImage(imgV)
        fv.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(w)) {
        fw = createSprite(fxx,300,30,50);
        grp.add(fw)
        fw.addImage(imgW)
        fw.scale=0.5
        fxx+=50; 
      }
       
      else if (mouseIsOver(x)) {
        fx = createSprite(fxx,300,30,50);
        grp.add(fx)
        fx.addImage(imgX)
        fx.scale=0.5
        fxx+=50; 
      }
      
      else if (mouseIsOver(y)) {
        fy = createSprite(fxx,300,30,50);
        grp.add(fy)
        fy.addImage(imgY)
        fy.scale=0.5
        fxx+=50; 
      }
      else if (mouseIsOver(z)) {
        fz = createSprite(fxx,300,30,50);
        grp.add(fz)
        fz.addImage(imgZ)
        fz.scale=0.5
        fxx+=50; 
      }
      
      
       else if (mouseIsOver(reset)) {
        grp.destroyEach();
        fxx=50; 
      }
      
    }
 




  
      
  


  

