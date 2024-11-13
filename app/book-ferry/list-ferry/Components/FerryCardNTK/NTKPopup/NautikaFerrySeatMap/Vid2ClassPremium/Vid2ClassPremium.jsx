import NautikaFerryModel from '@/app/AppData/components/IconComponent/NautikaFerryModel'
import styles from './Vid2ClassPremium.module.css'
import { useState } from 'react'
import SeatCard from '../SeatCard/SeatCard'
import { useEffect } from 'react'

export default function Vid2ClassPremium({zoom, ferryData, tripData, onFerrySeatSelect}) {

    const ferrySelectedClassSeats = ferryData[tripData.ferryClass.class_code]
    const [selectedSeats, setSelectedSeats] = useState([])

    const totalSeatAllowd = tripData.travelerAdu

    const getSeatNumber = (seat) => parseInt(seat.number.match(/\d+/)[0])

    const getRowPositions = (rowLetter, ranges) => {
        const rowSeats = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes(rowLetter));
        
        return ranges.map(([min, max]) => 
            rowSeats.filter(seat => {
                const seatNum = getSeatNumber(seat);
                return seatNum >= min && seatNum <= max;
            })
        );
    };

    const rowRanges = {
        A: [[7, 17], [2, 6]],                        // All four positions
        B: [[7, 17], [2, 6]],                        // Only first three positions
        C: [[7, 17], [2, 6]],                        // Only first two positions
        D: [[8, 16], [2, 7]],                        // All four positions
        E: [[17, 17], [8, 16], [2, 7], [1, 1]],      // Only two middle positions
        F: [[17, 17], [8, 16], [2, 7], [1, 1]],      // All four positions
        G: [[17, 17], [8, 16], [2, 7], [1, 1]],      // All four positions
        H: [[17, 17], [8, 16], [2, 7], [1, 1]],      // All four positions
        I: [[17, 17], [8, 16], [2, 7], [1, 1]],      // All four positions
        J: [[7, 17], [2, 6]],                        // All four positions
        K: [[7, 17], [2, 6]],                        // All four positions
        L: [[7, 17], [2, 6]],                        // All four positions
    };

    const rowPositions = {};
    for (const [rowLetter, ranges] of Object.entries(rowRanges)) {
        rowPositions[rowLetter] = getRowPositions(rowLetter, ranges);
    }

    const rowAfirstPosition = rowPositions.A?.[0] || []
    const rowAsecondPosition = rowPositions.A?.[1] || []

    const rowBfirstPosition = rowPositions.B?.[0] || []
    const rowBsecondPosition = rowPositions.B?.[1] || []

    const rowCfirstPosition = rowPositions.C?.[0] || []
    const rowCsecondPosition = rowPositions.C?.[1] || []

    const rowDfirstPosition = rowPositions.D?.[0] || []
    const rowDsecondPosition = rowPositions.D?.[1] || []

    const rowEfirstPosition = rowPositions.E?.[0] || [];
    const rowEsecondPosition = rowPositions.E?.[1] || [];
    const rowEthirdPosition = rowPositions.E?.[2] || [];
    const rowEfourthPosition = rowPositions.E?.[3] || [];

    const rowFfirstPosition = rowPositions.F?.[0] || [];
    const rowFsecondPosition = rowPositions.F?.[1] || [];
    const rowFthirdPosition = rowPositions.F?.[2] || [];
    const rowFfourthPosition = rowPositions.F?.[3] || [];

    const rowGfirstPosition = rowPositions.G?.[0] || [];
    const rowGsecondPosition = rowPositions.G?.[1] || [];
    const rowGthirdPosition = rowPositions.G?.[2] || [];
    const rowGfourthPosition = rowPositions.G?.[3] || [];

    const rowHfirstPosition = rowPositions.H?.[0] || [];
    const rowHsecondPosition = rowPositions.H?.[1] || [];
    const rowHthirdPosition = rowPositions.H?.[2] || [];
    const rowHfourthPosition = rowPositions.H?.[3] || [];

    const rowIfirstPosition = rowPositions.I?.[0] || [];
    const rowIsecondPosition = rowPositions.I?.[1] || [];
    const rowIthirdPosition = rowPositions.I?.[2] || [];
    const rowIfourthPosition = rowPositions.I?.[3] || [];
    
    const rowJfirstPosition = rowPositions.J?.[0] || []
    const rowJsecondPosition = rowPositions.J?.[1] || []
    
    const rowKfirstPosition = rowPositions.K?.[0] || []
    const rowKsecondPosition = rowPositions.K?.[1] || []
    
    const rowLfirstPosition = rowPositions.L?.[0] || []
    const rowLsecondPosition = rowPositions.L?.[1] || []
    
    // // Row A seat list
    // const rowA = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('A'))

    // const rowAfirstPosition = Object.values(rowA).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 7 && seatNum <= 17;
    // })

    // const rowAsecondPosition = Object.values(rowA).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 6;
    // })

    // // Row B seat list
    // const rowB = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('B'))

    // const rowBfirstPosition = Object.values(rowB).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 7 && seatNum <= 17;
    // })

    // const rowBsecondPosition = Object.values(rowB).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 6;
    // })

    // // Row C seat list
    // const rowC = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('C'))

    // const rowCfirstPosition = Object.values(rowC).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 7 && seatNum <= 17;
    // })

    // const rowCsecondPosition = Object.values(rowC).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 6;
    // })

    // // Row D seat list
    // const rowD = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('D'))

    // const rowDfirstPosition = Object.values(rowD).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 8 && seatNum <= 16;
    // })

    // const rowDsecondPosition = Object.values(rowD).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 7;
    // })

    // // Row E seat list
    // const rowE = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('E'))

    // const rowEfirstPosition = Object.values(rowE).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 17;
    // })

    // const rowEsecondPosition = Object.values(rowE).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 8 && seatNum <= 16;
    // })
    
    // const rowEthirdPosition = Object.values(rowE).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 7;
    // })

    // const rowEfourthPosition = Object.values(rowE).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 1;
    // })

    // // Row F seat list
    // const rowF = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('F'))

    // const rowFfirstPosition = Object.values(rowF).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 17;
    // })

    // const rowFsecondPosition = Object.values(rowF).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 8 && seatNum <= 16;
    // })
    
    // const rowFthirdPosition = Object.values(rowF).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 7;
    // })

    // const rowFfourthPosition = Object.values(rowF).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 1;
    // })

    // // Row G seat list
    // const rowG = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('G'))

    // const rowGfirstPosition = Object.values(rowG).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 17;
    // })

    // const rowGsecondPosition = Object.values(rowG).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 8 && seatNum <= 16;
    // })
    
    // const rowGthirdPosition = Object.values(rowG).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 7;
    // })

    // const rowGfourthPosition = Object.values(rowG).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 1;
    // })

    // // Row H seat list
    // const rowH = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('H'))

    // const rowHfirstPosition = Object.values(rowH).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 17;
    // })

    // const rowHsecondPosition = Object.values(rowH).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 8 && seatNum <= 16;
    // })
    
    // const rowHthirdPosition = Object.values(rowH).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 7;
    // })

    // const rowHfourthPosition = Object.values(rowH).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 1;
    // })

    // // Row I seat list
    // const rowI = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('I'))

    // const rowIfirstPosition = Object.values(rowI).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 17;
    // })

    // const rowIsecondPosition = Object.values(rowI).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 8 && seatNum <= 16;
    // })
    
    // const rowIthirdPosition = Object.values(rowI).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 7;
    // })

    // const rowIfourthPosition = Object.values(rowI).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum === 1;
    // })

    // // Row J seat list
    // const rowJ = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('J'))

    // const rowJfirstPosition = Object.values(rowJ).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 7 && seatNum <= 17;
    // })

    // const rowJsecondPosition = Object.values(rowJ).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 6;
    // })

    // // Row K seat list
    // const rowK = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('K'))

    // const rowKfirstPosition = Object.values(rowK).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 7 && seatNum <= 17;
    // })

    // const rowKsecondPosition = Object.values(rowK).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 6;
    // })

    // // Row L seat list
    // const rowL = Object.values(ferrySelectedClassSeats).filter(seat => seat.number.includes('L'))

    // const rowLfirstPosition = Object.values(rowL).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 7 && seatNum <= 17;
    // })

    // const rowLsecondPosition = Object.values(rowL).filter(seat => {
    //     const seatNum = getSeatNumber(seat);
    //     return seatNum >= 2 && seatNum <= 6;
    // })

    function selectSeat(seatItem){
        if(seatItem.isBooked){
            return
        }
        setSelectedSeats((prevSeats) => {
            if (prevSeats.some(s => s.number === seatItem.number)) {
                return prevSeats.filter(s => s.number !== seatItem.number);
            }

            if (prevSeats.length < totalSeatAllowd) {
                return [...prevSeats, seatItem];
            }

            return prevSeats;
        });
    }


    useEffect(() => {
      
        onFerrySeatSelect(selectedSeats)

    }, [selectedSeats])
    


  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.ferryLayoutZoomWrapper} style={{ transform: `scale(${zoom})` }}>
                <div className={styles.seatLayout}>
                    <div className={styles.rowGrooup1}>
                        <div className={styles.rowA}>
                            <span className={styles.rowALable}>A</span>
                            <div className={`${styles.rowPosition} ${styles.AfirstPosition}`}>
                                {
                                    rowAfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.AsecondPosition}`}>
                                {
                                    rowAsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowB}>
                            <span className={styles.rowBLable}>B</span>
                            <div className={`${styles.rowPosition} ${styles.BfirstPosition}`}>
                                {
                                    rowBfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.BsecondPosition}`}>
                                {
                                    rowBsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowC}>
                            <span className={styles.rowCLable}>C</span>
                            <div className={`${styles.rowPosition} ${styles.CfirstPosition}`}>
                                {
                                    rowCfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.CsecondPosition}`}>
                                {
                                    rowCsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowGrooup2}>
                        <div className={styles.rowD}>
                            <span className={styles.rowDLable}>D</span>
                            <div className={`${styles.rowPosition} ${styles.DfirstPosition}`}>
                                {
                                    rowDfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.DsecondPosition}`}>
                                {
                                    rowDsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowE}>
                            <span className={styles.rowELable}>E</span>
                            <div className={`${styles.rowPosition} ${styles.EfirstPosition}`}>
                                {
                                    rowEfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.EsecondPosition}`}>
                                {
                                    rowEsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.EthirdPosition}`}>
                                {
                                    rowEthirdPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.EfourtPosition}`}>
                                {
                                    rowEfourthPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowF}>
                            <span className={styles.rowFLable}>F</span>
                            <div className={`${styles.rowPosition} ${styles.FfirstPosition}`}>
                                {
                                    rowFfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.FsecondPosition}`}>
                                {
                                    rowFsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.FthirdPosition}`}>
                                {
                                    rowFthirdPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.FfourtPosition}`}>
                                {
                                    rowFfourthPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowG}>
                            <span className={styles.rowGLable}>G</span>
                            <div className={`${styles.rowPosition} ${styles.GfirstPosition}`}>
                                {
                                    rowGfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.GsecondPosition}`}>
                                {
                                    rowGsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.GthirdPosition}`}>
                                {
                                    rowGthirdPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.GfourtPosition}`}>
                                {
                                    rowGfourthPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowH}>
                            <span className={styles.rowHLable}>H</span>
                            <div className={`${styles.rowPosition} ${styles.HfirstPosition}`}>
                                {
                                    rowHfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.HsecondPosition}`}>
                                {
                                    rowHsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.HthirdPosition}`}>
                                {
                                    rowHthirdPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.HfourtPosition}`}>
                                {
                                    rowHfourthPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowI}>
                            <span className={styles.rowILable}>I</span>
                            <div className={`${styles.rowPosition} ${styles.IfirstPosition}`}>
                                {
                                    rowIfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.IsecondPosition}`}>
                                {
                                    rowIsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.IthirdPosition}`}>
                                {
                                    rowIthirdPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.IfourtPosition}`}>
                                {
                                    rowIfourthPosition.map((item, index) => (
                                        <SeatCard key={item.number} specialSeat={true} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.rowGrooup3}>
                        <div className={styles.rowJ}>
                            <span className={styles.rowJLable}>J</span>
                            <div className={`${styles.rowPosition} ${styles.JfirstPosition}`}>
                                {
                                    rowJfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.JsecondPosition}`}>
                                {
                                    rowJsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowK}>
                            <span className={styles.rowKLable}>K</span>
                            <div className={`${styles.rowPosition} ${styles.KfirstPosition}`}>
                                {
                                    rowKfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.KsecondPosition}`}>
                                {
                                    rowKsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.rowL}>
                            <span className={styles.rowLLable}>L</span>
                            <div className={`${styles.rowPosition} ${styles.LfirstPosition}`}>
                                {
                                    rowLfirstPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                            <div className={`${styles.rowPosition} ${styles.LsecondPosition}`}>
                                {
                                    rowLsecondPosition.map((item, index) => (
                                        <SeatCard key={item.number} singleSeatData={item} selectedSeats={selectedSeats} selectSeatFunc={selectSeat}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <NautikaFerryModel Icon="NautikaVID2ClassPL" />
            </div>
        </div>
    </div>
  )
}
