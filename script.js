
function hitungGajiPokok(golongan){
    if(golongan === "A"){
    return 5000000;
    }
    else if(golongan === "B"){
    return 6500000; 
    }
    else if(golongan === "C"){
    return 9500000;
    }
    return 0;
}

function hitungTarifLembur(jamLembur,gajiPokok){
    if(jamLembur===0){
      return  0 * gajiPokok;
    }
    else if(jamLembur===1){
      return  0.30 * gajiPokok;
    }
    else if(jamLembur===2){
      return  0.32 *gajiPokok;
    }
    else if(jamLembur===3){
      return  0.34 *gajiPokok;
    }
    else if(jamLembur===4){
      return  0.36 *gajiPokok;
    }
    else if(jamLembur>=5){
      return  0.38 *gajiPokok;
    }
    return 0;
}


// fungsi hitung gaji
document.getElementById("btnSubmit").addEventListener("click",function(){

    const golonganKaryawan = document.getElementById("golongan").value;
    const totalJamLembur = parseFloat(document.getElementById("jamLembur").value) || 0;

        const gaji = hitungGajiPokok(golonganKaryawan);
        const lembur = hitungTarifLembur(totalJamLembur,gaji);

const totalPenghasilan = gaji+lembur;

// hasil dimodal
document.getElementById("hasilGaji").innerText = "Rp"+ gaji.toLocaleString('id-ID');
document.getElementById("hasilLembur").innerText = "Rp" + lembur.toLocaleString('id-ID');
document.getElementById("hasilTotal").innerText = "Rp" + totalPenghasilan.toLocaleString('id-ID');

document.getElementById("modalGaji").style.display="block";

})

// fungsi tutup modal
document.getElementById("closeModal").addEventListener("click",function(){
    document.getElementById("modalGaji").style.display="none";
})

