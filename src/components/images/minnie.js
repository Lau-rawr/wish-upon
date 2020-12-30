import React, { useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

export default class Minnie extends React.Component {
   render() {
      return (
         <div className="colored-image" id={this.props.size}>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               // width="210mm" height="297mm"
               viewBox="0 0 210 297"
               version="1.1"
               id="Layer_1">
               <defs
                  id="defs2" />
               <metadata
                  id="metadata185">
               </metadata>
               <g
                  id="layer1">
                  <path
                     onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]}
                     fill-rule="evenodd" fill="#000000" stroke-width="0.0136405"
                     d="m 146.7878,58.615943 c -3.29565,0.539338 -6.02553,1.710093 -9.29289,3.998987 -3.81899,2.657218 -7.8643,6.616748 -13.35233,13.075638 -3.21079,3.78851 -6.19526,8.28737 -8.69882,13.10194 -2.84303,5.45914 -4.7101,10.37895 -5.84166,15.364532 -0.24045,1.07867 -0.46676,2.0258 -0.49505,2.11788 -0.0424,0.11839 -0.26874,0.0789 -0.84866,-0.10524 -0.43848,-0.1447 -1.35787,-0.38148 -2.02266,-0.53933 -2.70158,-0.63142 -6.449855,-0.15786 -9.208018,1.13128 -0.410189,0.19733 -0.806232,0.31572 -0.876955,0.24994 -0.05658,-0.0526 -0.367754,-1.02605 -0.678932,-2.14419 -0.792088,-2.85454 -1.966075,-6.011632 -3.125918,-8.353152 -0.226311,-0.47356 -0.424333,-0.89451 -0.424333,-0.92081 0,-0.14471 -2.107519,-4.06476 -2.857174,-5.31445 -0.452621,-0.74981 -0.820377,-1.38123 -0.820377,-1.42069 0,-0.0263 -0.183877,-0.31571 -0.424333,-0.63142 -0.22631,-0.31571 -0.424332,-0.60511 -0.424332,-0.65773 0,-0.11839 -2.20653,-3.39387 -3.239073,-4.80141 -1.909498,-2.61776 -5.091994,-6.4852 -7.28438,-8.87933 -1.301287,-1.42069 -5.516326,-5.36706 -7.015635,-6.56412 -4.31405,-3.472809 -8.670533,-5.748548 -12.531962,-6.511512 -2.461129,-0.499874 -4.002872,-0.48672 -6.421568,0.06577 -3.734129,0.855047 -7.553123,4.275232 -9.844521,8.813552 -2.58843,5.14344 -3.790706,13.00987 -3.097629,20.35011 0.212167,2.18366 0.523344,4.41993 0.777943,5.41968 0.07072,0.2894 0.09901,0.53934 0.07072,0.5788 -0.02829,0.0263 -0.594066,-0.0395 -1.230565,-0.13155 -1.852919,-0.2894 -5.389026,-0.22362 -7.114646,0.1447 -4.455494,0.92082 -8.599811,2.90716 -12.517817,5.985332 -1.782197,1.40754 -4.738383,4.30154 -6.025525,5.89324 -3.4512401,4.28839 -5.7992141,9.02403 -7.0297801,14.16746 -1.159843,4.81457 -1.159843,9.97116 -0.02829,14.9962 2.277253,9.97116 10.0283981,19.61345 19.7314741,24.50695 5.940659,2.98609 13.097739,4.17 18.882809,3.10447 3.323939,-0.61826 7.312668,-1.98634 9.420187,-3.22286 0.325322,-0.18417 0.60821,-0.30256 0.650644,-0.27625 0.02829,0.0395 -0.155589,0.47356 -0.424333,0.97344 -2.432841,4.4857 -4.639372,11.36554 -5.629482,17.50872 -1.287142,8.0769 -1.230565,15.60131 0.155589,21.99442 0.480911,2.24944 1.230565,4.70934 1.937787,6.44574 0.509199,1.22337 0.523343,1.27599 0.48091,2.894 -0.09901,4.07792 0.876954,7.41917 3.210785,11.04983 4.087738,6.35365 12.687549,12.74677 23.083703,17.15355 4.271616,1.80218 8.811976,3.28864 12.772415,4.17 l 1.386154,0.30255 1.230566,1.26284 c 2.687441,2.77561 5.021271,4.82772 6.888335,6.0774 2.050937,1.36807 5.587047,2.723 8.401797,3.20972 5.16271,0.8945 9.90109,-0.89451 15.77102,-5.97217 l 1.82464,-1.57855 1.57003,-0.36833 c 0.86281,-0.19731 2.00851,-0.49987 2.54599,-0.67088 0.53749,-0.15786 1.07498,-0.30255 1.17399,-0.30255 0.45262,0 5.45975,-1.94688 7.79358,-3.02556 11.89546,-5.51176 22.58865,-14.64102 27.25631,-23.25725 1.66904,-3.09133 2.46113,-5.66963 2.70159,-8.7741 0.12729,-1.82848 -0.3819,-4.11738 -1.38616,-6.15634 l -0.43848,-0.88135 0.5092,-1.02606 c 1.98022,-3.95952 2.84303,-7.84011 3.02691,-13.64127 0.16973,-5.68277 -0.48091,-11.03668 -2.07923,-17.00885 -1.64075,-6.15633 -4.32819,-12.06273 -7.17122,-15.78547 -0.33947,-0.44726 -0.59407,-0.81558 -0.55163,-0.81558 0.0424,0 0.38189,0.171 0.74965,0.36832 0.93353,0.51303 3.14006,1.38123 4.49793,1.78902 9.16558,2.723 18.84037,1.01291 26.70467,-4.69618 1.5276,-1.10498 3.9463,-3.45964 5.24758,-5.09081 3.819,-4.76195 5.92652,-9.74753 6.88834,-16.31166 0.2546,-1.64432 0.2546,-7.27447 0.0141,-9.07664 -0.6365,-4.77511 -2.26312,-9.85277 -4.37063,-13.72021 -4.15846,-7.57702 -12.26322,-13.588662 -20.41041,-15.140902 -5.65777,-1.06552 -10.72147,-0.56564 -15.91248,1.5917 -0.77794,0.31571 -1.47102,0.60511 -1.55588,0.64458 -0.099,0.0395 -0.1273,-2.1442 -0.099,-6.41943 0.0565,-6.73513 -0.11315,-11.70756 -0.48091,-14.31216 -0.72136,-5.20921 -2.16409,-9.33974 -4.35648,-12.404751 -0.66479,-0.920819 -2.07923,-2.170503 -3.09763,-2.709839 -1.57003,-0.828738 -4.49793,-1.223375 -6.61959,-0.881356 z"
                     id="path120" />
               </g>
               <g
                  id="layer9" />
               <g
                  id="layer6">
                  <path
                     onClick={() => this.props.onFill(1)} fill={this.props.fillColors[1]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 105.50022,107.16943 c 3.06934,0.59196 5.53047,2.20997 7.38339,4.81457 1.31543,1.85479 2.07924,3.67012 2.60258,6.23525 0.3536,1.72326 0.32532,5.02505 -0.0849,7.10347 -0.57992,3.02555 -2.33383,7.12977 -3.84728,8.99772 -0.32532,0.40779 -0.60821,0.74981 -0.62236,0.77612 -0.0141,0.0263 -0.77794,0.13154 -1.69733,0.22362 -2.27725,0.24994 -7.49654,0.24994 -9.292885,0 -1.074976,-0.14469 -3.026906,-0.69719 -3.32394,-0.92081 -0.02829,-0.0263 0.141444,-0.68404 0.367756,-1.47332 1.555887,-5.27497 1.555887,-12.60206 0,-21.2183 -0.240456,-1.34176 -0.466767,-2.61776 -0.495055,-2.85453 -0.07072,-0.39464 -0.02829,-0.43411 0.749654,-0.80243 1.34372,-0.61827 2.022653,-0.81559 3.52196,-1.01291 1.54175,-0.19731 3.25322,-0.15785 4.73838,0.13155 z"
                     id="path169" />
                  <path
                     onClick={() => this.props.onFill(2)} fill={this.props.fillColors[2]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 143.26584,62.101902 c 0.55163,2.709836 -0.62236,5.564376 -4.59694,11.128756 -1.98022,2.78877 -3.49367,4.66987 -4.44135,5.51176 -0.39605,0.36833 -0.65065,0.6972 -0.57992,0.73666 0.16973,0.0921 -0.62236,1.18391 -3.15421,4.40678 -1.08912,1.36807 -2.71573,3.43334 -3.60683,4.57778 -0.89109,1.14445 -1.89535,2.2889 -2.22067,2.56514 -0.32532,0.26309 -0.6365,0.65773 -0.69308,0.88136 -0.1273,0.47356 -0.72137,1.40754 -2.36212,3.68328 -2.95618,4.14368 -5.88408,8.800392 -6.63373,10.576262 -0.15559,0.39464 -0.45262,0.88136 -0.65065,1.09183 -0.18388,0.21047 -0.33946,0.4341 -0.33946,0.49988 0,0.0526 -0.16973,0.43409 -0.36776,0.84189 l -0.36775,0.74981 -0.52335,-0.51303 c -0.28289,-0.27625 -0.7638,-0.67088 -1.04668,-0.86821 -0.39605,-0.27624 -0.52335,-0.47356 -0.52335,-0.7498 0,-0.31571 -0.0565,-0.38148 -0.35361,-0.38148 -0.22631,0 -0.35361,-0.0789 -0.35361,-0.19732 0,-0.10524 -0.099,-0.19732 -0.21216,-0.19732 -0.16974,0 -0.1556,-0.1184 0.12729,-0.63142 0.18388,-0.34202 0.73552,-1.82849 1.21643,-3.31495 1.89534,-5.761702 3.81899,-9.971162 6.9732,-15.259292 1.98022,-3.3281 3.42295,-5.30129 4.11603,-5.64331 0.26874,-0.1447 0.36775,-0.2894 0.36775,-0.56564 0,-0.48672 0.2546,-0.96029 1.24471,-2.27574 4.49792,-5.99848 9.75965,-11.43131 13.83324,-14.25955 1.25886,-0.894505 1.61247,-1.22337 1.61247,-1.539079 0,-0.236782 0.099,-0.289401 0.65065,-0.368328 0.94767,-0.118391 1.58417,-0.447255 2.0085,-1.026056 0.29703,-0.420945 0.39605,-0.486719 0.53749,-0.342018 0.11316,0.09208 0.2546,0.499873 0.33947,0.881355 z"
                     id="path165" />
                  <path
                     onClick={() => this.props.onFill(3)} fill={this.props.fillColors[3]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 56.631232,62.364994 c 0.622355,0.144699 1.555886,0.420945 2.07923,0.591955 0.919388,0.315709 2.404553,1.157601 2.786453,1.565389 0.09901,0.11839 0.254599,0.18417 0.367755,0.1447 0.22631,-0.0789 2.81474,1.52593 4.851537,3.02555 0.834522,0.60511 2.786452,2.27574 4.342339,3.70959 3.620973,3.34126 5.841648,5.81431 10.169843,11.35238 2.56014,3.26234 3.578539,4.66987 4.243327,5.82747 0.268744,0.48672 0.60821,1.01291 0.749655,1.14445 0.438477,0.4341 1.923641,2.85454 3.012762,4.86719 1.103266,2.05211 1.626609,3.13078 2.701585,5.603842 0.3819,0.8682 0.693077,1.447 0.693077,1.3023 0,-0.15785 0.08487,-0.34202 0.183878,-0.42094 0.141444,-0.11839 0.169733,0.0131 0.1273,0.67088 -0.02829,0.67088 0.07072,1.14445 0.565777,2.65722 0.565777,1.67063 0.650644,1.84164 0.933532,1.82848 0.226311,0 0.297033,0.0526 0.240455,0.17101 -0.04243,0.10524 -0.07072,0.36833 -0.07072,0.59196 0,0.38148 -0.04243,0.35517 -1.032543,-0.64458 -0.579925,-0.56564 -2.022656,-2.09157 -3.210787,-3.39387 -2.857174,-3.117632 -10.155698,-9.931692 -13.281616,-12.391602 -0.198023,-0.15785 -0.933532,-0.76296 -1.640754,-1.32861 -1.810486,-1.49962 -7.058068,-5.65646 -8.98171,-7.12977 -2.616719,-1.99949 -5.459748,-4.28839 -7.270235,-5.85378 -0.919388,-0.78927 -1.867065,-1.5917 -2.121664,-1.77586 l -0.438477,-0.32887 0.339466,0.46041 c 0.537488,0.71035 4.18675,4.05161 8.642244,7.89274 4.95055,4.26208 9.575777,8.26106 10.000109,8.64254 0.198023,0.17101 0.325322,0.44726 0.325322,0.68404 0,0.30256 0.05658,0.38148 0.212167,0.32887 0.381899,-0.14471 1.654897,0.8682 5.65777,4.56463 4.54036,4.169992 7.213657,6.735132 8.910988,8.537312 0.86281,0.90766 2.022653,2.09157 2.602574,2.65722 0.565778,0.55249 0.99011,1.06552 0.947677,1.13129 -0.04243,0.0789 0.212166,0.64458 0.565777,1.26284 0.693077,1.22337 0.990109,2.40728 1.400298,5.53806 0.339466,2.68354 0.35361,3.05186 0.1273,3.31496 -0.141444,0.171 -0.169733,0.44725 -0.09901,1.01289 0.08487,0.76297 0.08487,0.76297 -0.2546,0.67089 -0.183878,-0.0526 -0.509199,-0.17101 -0.707221,-0.27625 -1.541743,-0.7235 -4.879827,-1.7364 -8.684678,-2.61775 -0.848665,-0.19732 -1.782197,-0.47357 -2.050941,-0.59196 -0.367756,-0.17101 -0.579921,-0.19731 -0.848666,-0.10523 -0.240455,0.0789 -1.202276,0.0526 -2.97033,-0.10524 -4.893971,-0.42095 -10.693185,-0.0263 -13.889825,0.94713 -0.975966,0.30255 -0.876954,0.49987 0.212166,0.39463 3.267362,-0.30255 5.191004,-0.36833 8.727111,-0.30255 4.130172,0.0921 6.26598,0.24994 7.439967,0.55249 0.410189,0.10524 0.919389,0.15785 1.145699,0.11839 0.693077,-0.13154 4.69595,0.5788 7.227802,1.26284 2.574285,0.69719 3.705839,1.11814 4.639371,1.72324 0.325322,0.21048 0.693077,0.38148 0.820377,0.38148 0.183878,0 0.183878,0.0526 0.01414,0.44726 -0.113156,0.26309 -0.268744,1.34177 -0.353611,2.53883 -0.297033,4.1963 -0.636499,6.3142 -1.24471,7.72173 -0.381899,0.89451 -1.357864,2.22312 -2.093374,2.82823 -0.876955,0.71035 -3.026907,2.22312 -4.130172,2.88085 -0.452622,0.27624 -1.145699,0.71034 -1.527599,0.97344 -1.994363,1.35491 -8.741255,4.99873 -11.414551,6.15633 -4.101883,1.77587 -5.742637,2.34151 -9.292888,3.19656 -1.923642,0.47357 -2.630863,0.60511 -3.536106,0.69719 -0.268745,0.0263 -1.103265,0.14471 -1.838776,0.24994 -2.220675,0.31571 -6.803469,0.39464 -9.080721,0.1447 -3.635117,-0.39464 -6.563014,-1.11814 -7.9916,-1.9995 -0.3819,-0.22362 -1.400299,-2.07842 -1.541743,-2.78876 -0.05658,-0.27625 -0.02829,-0.48672 0.05658,-0.53934 0.113156,-0.0658 0.09901,-0.24994 -0.05658,-0.64458 -0.367755,-1.01289 -0.480911,-2.27573 -0.480911,-5.68276 0,-4.09107 0.311178,-8.28738 1.060833,-14.66734 0.113155,-0.94712 0.268744,-2.43359 0.35361,-3.31494 0.169734,-1.73641 0.650644,-5.0382 0.777944,-5.14344 0.02829,-0.0395 0.155588,0.0132 0.282888,0.10524 0.268744,0.21047 0.636499,-0.0395 0.636499,-0.4341 0,-0.1447 -0.410188,-1.78902 -0.905243,-3.64381 -4.56865,-16.916772 -5.671915,-26.480132 -3.960439,-34.201862 1.131554,-5.0382 3.125918,-8.95826 5.954803,-11.72072 1.626609,-1.578543 2.956185,-2.40728 4.992982,-3.104471 0.806233,-0.276246 1.103265,-0.302556 2.33383,-0.249938 0.777944,0.02631 1.923643,0.17101 2.545998,0.328865 z"
                     id="path167" />
                  <path
                     onClick={() => this.props.onFill(4)} fill={this.props.fillColors[4]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 150.55021,60.470737 c 0.45263,0.118391 1.14571,0.368327 1.5276,0.565646 0.82038,0.407791 2.12167,1.552238 2.77231,2.446749 1.25885,1.683786 2.36212,4.393626 2.98447,7.313936 0.82038,3.84113 0.87696,4.61725 1.00426,15.39083 0.0566,5.45915 0.16973,10.87883 0.2546,12.03643 0.46677,6.366812 0.74965,9.129262 1.21642,12.075882 0.21217,1.28915 0.43848,1.8811 0.82037,2.17051 0.16974,0.13154 0.21217,-0.1184 0.26875,-1.77587 0.0424,-1.07867 0.14144,-2.09157 0.21216,-2.26258 0.12731,-0.31571 0.1556,-0.2894 0.49506,0.39464 0.19802,0.39463 0.8911,1.74955 1.5276,3.01239 2.6733,5.30128 4.11603,8.93195 4.83739,12.16797 0.42434,1.86794 0.45263,2.13103 0.45263,4.99872 0.0141,2.90717 0,3.07817 -0.38191,4.34101 -0.50919,1.72325 -1.68318,3.92006 -2.88546,5.39337 -2.12166,2.57829 -5.65776,4.41993 -9.87281,5.14344 -2.09337,0.36833 -6.77517,0.32886 -9.50505,-0.0526 -4.17261,-0.6051 -7.65214,-1.49962 -13.55036,-3.48596 -2.26311,-0.76296 -5.98309,-1.98634 -8.27449,-2.70983 -2.29139,-0.73666 -4.58279,-1.47332 -5.09199,-1.64433 -0.91939,-0.3157 -4.39891,-1.28915 -5.12028,-1.447 -0.22631,-0.0526 -0.39605,-0.1447 -0.39605,-0.21047 0,-0.0789 0.31118,-0.71035 0.69308,-1.42069 1.82464,-3.35442 2.71573,-6.6299 2.98447,-11.02353 0.15559,-2.59144 0.24046,-2.81507 1.28715,-3.65696 1.93778,-1.53909 10.58003,-4.56464 12.06519,-4.20946 0.28289,0.0658 0.36776,0.0263 0.36776,-0.13155 0,-0.11839 0.29703,-0.34202 0.67892,-0.52618 1.15985,-0.55249 1.1457,-0.67088 -0.0849,-0.69719 -1.98022,-0.0395 -5.09199,0.51302 -7.46825,1.35492 -1.25885,0.43409 -4.27162,1.7364 -4.72424,2.0258 -0.19803,0.13155 -0.72137,0.42094 -1.17399,0.64457 -0.69308,0.35518 -0.86281,0.39464 -1.06083,0.24994 -0.24046,-0.19732 -0.87696,-1.46016 -0.87696,-1.76271 0,-0.27625 -1.21642,-2.723 -1.86706,-3.7622 l -0.56578,-0.88136 0.73551,-1.35492 c 0.7638,-1.39438 3.63512,-5.86693 5.48804,-8.52415 1.32958,-1.920572 4.29991,-5.880092 6.94491,-9.273972 1.13156,-1.447 2.99862,-3.86744 4.1726,-5.36706 5.86994,-7.53756 8.40179,-11.1156 10.35373,-14.62787 1.30128,-2.34151 1.89535,-3.65697 2.4187,-5.3276 0.31117,-0.97343 0.33946,-1.28914 0.26874,-2.367818 -0.0424,-0.684037 -0.11316,-1.525929 -0.16974,-1.867947 l -0.0849,-0.618265 0.53749,-0.210473 c 1.7539,-0.697191 4.1726,-0.907665 5.78506,-0.526182 z"
                     id="path163" />
               </g>
               <g
                  id="layer2">
                  <path
                     onClick={() => this.props.onFill(5)} fill={this.props.fillColors[5]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 94.227116,137.517 c 0.48091,0.23678 2.376263,0.8682 4.483783,1.48646 2.263111,0.65773 2.744021,0.92082 4.342341,2.34151 1.42858,1.276 2.43284,2.42044 4.11602,4.65672 0.67894,0.92081 1.49931,1.93372 1.82464,2.26259 l 0.59406,0.6051 -0.15558,-0.55249 c -0.14145,-0.52618 -0.12731,-0.59196 0.29703,-1.02606 0.24045,-0.26308 0.82037,-1.21022 1.27299,-2.10472 1.9095,-3.72274 4.22919,-6.15634 6.94492,-7.26132 1.25885,-0.51303 1.11741,-0.53934 5.26172,0.96028 3.64926,1.31546 10.69319,3.81483 15.78518,5.617 l 2.31969,0.81558 0.77794,1.22337 c 3.14006,4.94612 5.48804,11.73387 6.67617,19.29775 1.14569,7.28762 1.21642,16.0354 0.21217,23.54666 -0.45262,3.36757 -1.34373,7.74804 -2.05095,9.99746 -0.59406,1.89426 -1.31543,3.95953 -1.55588,4.51202 l -0.26875,0.56565 0.96182,-0.48672 c 0.52335,-0.27625 1.0184,-0.53934 1.08912,-0.59196 0.36775,-0.23678 3.29566,-1.34176 4.48379,-1.68378 2.19238,-0.63142 3.57854,-0.85505 5.34659,-0.85505 2.00851,0 2.99861,0.18416 4.46964,0.85505 0.91938,0.39464 1.34372,0.69719 2.06508,1.42069 1.6549,1.65748 2.37627,3.53857 2.37627,6.13003 0,1.74955 -0.26875,3.17025 -0.94768,5.0645 -1.59832,4.43309 -4.75253,8.76094 -10.22641,13.99646 -8.2745,7.91904 -17.24206,13.19402 -26.1672,15.40399 -0.73551,0.18416 -1.40029,0.32885 -1.47102,0.32885 -0.0565,0 0,-0.15785 0.14145,-0.35517 0.86281,-1.22337 1.61247,-2.48621 1.61247,-2.69668 0,-0.24994 -0.0141,-0.24994 -0.39605,0 -0.21217,0.1447 -1.24471,1.02605 -2.2914,1.96003 -6.26598,5.57754 -9.29288,7.48494 -13.32404,8.41892 -1.37201,0.31571 -1.61247,0.32887 -4.00288,0.26309 -1.92364,-0.0526 -2.8006,-0.13155 -3.60683,-0.32886 -4.24332,-1.05237 -6.944908,-2.77561 -14.002977,-8.87934 -1.428587,-1.23652 -3.889717,-3.23602 -3.932151,-3.1834 -0.02829,0.0131 0.3819,0.57881 0.905244,1.23653 0.509199,0.67088 0.919387,1.23653 0.876954,1.26284 -0.155588,0.1447 -4.299905,-0.98659 -6.874191,-1.89425 -8.514944,-3.0124 -16.633844,-7.69543 -22.107737,-12.77308 -1.895354,-1.74956 -3.635117,-3.67013 -4.710094,-5.1829 -0.891099,-1.26284 -2.135808,-3.67012 -2.602575,-5.0382 -0.636498,-1.8811 -0.777943,-2.78877 -0.777943,-4.84088 0,-1.49962 0.05658,-2.03895 0.311178,-2.894 0.749654,-2.48622 2.149953,-4.09107 4.427205,-5.11712 2.149952,-0.94714 2.899607,-1.06552 6.761036,-1.05237 2.927896,0 3.536106,0.0395 5.106137,0.32887 1.782198,0.32886 1.796342,0.32886 1.683187,0.0526 -0.05658,-0.14469 -0.410188,-0.88135 -0.777944,-1.64432 -2.20653,-4.60409 -3.493673,-9.27396 -4.342339,-15.66707 -0.282887,-2.15736 -0.311177,-3.03871 -0.311177,-8.20845 -0.01414,-6.22211 0.08487,-7.53757 0.848666,-11.90488 1.004254,-5.788 2.800596,-11.22084 4.978837,-15.02251 l 0.650645,-1.14444 1.357864,-0.64458 c 0.73551,-0.35517 2.744019,-1.31545 4.455494,-2.13103 3.875573,-1.8548 6.336703,-3.13079 8.981711,-4.64357 2.263108,-1.28914 5.671914,-3.48596 6.831757,-4.38046 0.820377,-0.63143 0.834521,-0.64458 1.272999,-0.42095 z"
                     id="path171" />
                  <path
                     onClick={() => this.props.onFill(6)} fill={this.props.fillColors[6]}
                     fill-rule="evenodd" fill="#000000" stroke-width="0.0136405"
                     d="m 144.31252,212.40591 c -1.03254,0.17101 -1.61246,0.38148 -1.61246,0.59195 0,0.1184 1.21642,0.39464 1.81049,0.39464 0.39604,0.0132 3.25321,0.7235 3.39466,0.85505 0.1273,0.11839 -1.21642,2.48621 -2.30555,4.07791 -5.33244,7.76119 -13.8191,13.95699 -23.04126,16.83784 -3.87557,1.21022 -7.21366,1.68378 -11.75402,1.68378 -4.45549,0 -8.13305,-0.48672 -12.234926,-1.63116 -8.486655,-2.36783 -15.092102,-6.49835 -19.46273,-12.18112 -1.555887,-2.01265 -3.536106,-5.88009 -3.140062,-6.10372 0.339466,-0.19732 2.050942,-0.40779 3.437095,-0.40779 H 80.8182 l -0.707221,-0.30256 c -0.735511,-0.32886 -2.418697,-0.59195 -3.649262,-0.59195 -1.018399,0 -3.239073,0.46041 -4.342339,0.88135 -1.456876,0.5525 -2.800596,1.36808 -3.493673,2.07842 -0.678932,0.69719 -1.145699,1.447 -0.99011,1.5917 0.05658,0.0526 0.622355,-0.19731 1.258854,-0.55249 1.626609,-0.8945 3.422951,-1.71009 4.455494,-2.03895 0.848665,-0.2631 0.876955,-0.2631 1.131554,-0.0263 0.141444,0.13154 0.339466,0.51302 0.452622,0.82874 0.579921,1.82847 2.574285,4.95926 4.56865,7.16923 1.34372,1.49962 4.526215,4.36732 5.983091,5.39337 1.400299,0.98659 1.966075,1.51277 3.394663,3.14394 6.87419,7.87958 10.396152,10.72096 15.318417,12.36528 2.81474,0.93398 6.5913,1.19707 8.99585,0.61827 4.41306,-1.06552 7.28438,-3.24917 12.40466,-9.48444 2.31969,-2.82823 2.31969,-2.82823 3.67755,-3.45965 8.93928,-4.23576 16.57727,-11.48393 19.36372,-18.44269 0.18388,-0.4341 0.36776,-0.84189 0.42433,-0.89451 0.16974,-0.17101 1.18813,0.2894 2.6733,1.21022 1.89535,1.14445 2.20653,1.05236 1.07498,-0.34202 -0.93354,-1.1576 -1.81049,-1.8548 -2.98448,-2.36782 -1.99436,-0.84189 -3.93215,-1.17076 -5.51633,-0.89451 z"
                     id="path126" />
               </g>
               <g
                  id="layer3">
                  <path
                     onClick={() => this.props.onFill(7)} fill={this.props.fillColors[7]}
                     fill-rule="evenodd" fill="#000000" stroke-width="0.0136405"
                     d="m 130.21053,150.38216 c -0.39604,1.61801 -1.76805,5.07766 -2.71573,6.90614 -1.15984,2.22312 -2.40455,3.94637 -3.84728,5.34076 -1.27299,1.22337 -1.42859,1.31545 -2.58843,1.56539 -0.42433,0.0921 -0.86281,0.23677 -0.97596,0.31571 -0.16974,0.11839 -0.18388,0.0789 -0.11316,-0.19732 0.66479,-2.48621 0.6365,-7.51126 -0.0566,-10.68151 -0.22631,-1.05236 -1.1174,-3.51227 -1.34371,-3.7622 -0.16974,-0.17101 -0.15559,0.18416 0.0283,1.23653 0.11315,0.67088 0.24045,2.63091 0.29703,4.49886 0.11316,4.35416 -0.11315,6.60359 -0.96182,9.68175 -0.29703,1.10498 -0.3819,1.28915 -1.42859,3.11763 -1.21642,2.13105 -2.39041,5.36707 -3.16835,8.65571 -1.25885,5.38022 -1.41444,12.77307 -0.39604,17.71919 0.32532,1.5917 1.01839,3.74905 1.37201,4.27523 0.16973,0.24994 0.31117,0.60511 0.31117,0.78927 0.0141,0.18417 0.0565,0.44726 0.11316,0.59196 0.0849,0.24993 0.0283,0.26309 -1.57003,0.30256 -1.61247,0.0263 -4.73839,0.35517 -7.11464,0.7498 -0.63651,0.0921 -1.21643,0.15786 -1.27301,0.1184 -0.0565,-0.0263 0.0424,-0.44726 0.22631,-0.90767 0.94768,-2.34151 1.38616,-7.98482 1.07498,-14.07538 -0.53749,-10.98406 -2.20653,-16.82468 -5.88408,-20.6132 -1.72562,-1.78901 -3.70584,-8.58992 -3.762417,-12.97039 -0.01414,-0.69719 -0.05658,-1.69694 -0.113156,-2.19682 l -0.09901,-0.92081 -0.169733,0.52618 c -0.650643,1.97318 -0.834521,5.82747 -0.396044,8.28737 0.339467,1.86795 0.891099,3.8806 1.357865,4.94612 l 0.396044,0.90767 h -0.5092 c -0.282888,0 -0.876954,0.0921 -1.329575,0.21046 l -0.834522,0.22363 -0.834521,-0.80242 c -1.654898,-1.5917 -3.437095,-3.99899 -4.710093,-6.30104 -0.806233,-1.48647 -2.135808,-4.3147 -2.291397,-4.94611 -0.113156,-0.39464 -0.353611,-0.48673 -0.353611,-0.13155 0,0.67088 0.452621,2.88085 0.777944,3.85429 0.509199,1.51277 1.584175,3.53858 2.602573,4.95926 0.86281,1.18391 2.800597,3.28865 3.380518,3.65698 0.410189,0.27624 0.396044,0.35517 -0.169733,1.05236 -0.268744,0.31571 -0.664787,0.88135 -0.876954,1.23652 l -0.367755,0.65774 -0.777943,-0.32887 c -0.947677,-0.38148 -3.295652,-1.81533 -4.073595,-2.4599 -0.311178,-0.2631 -0.60821,-0.48672 -0.664788,-0.48672 -0.226311,0 -3.19664,-3.20971 -4.243328,-4.56464 -0.622355,-0.81558 -1.188131,-1.44699 -1.258854,-1.42068 -0.226311,0.14469 0.636499,1.90741 1.683187,3.42018 1.838776,2.68353 5.191005,5.45914 8.005745,6.64305 l 0.905243,0.38149 -0.268744,0.8945 c -1.810486,6.0511 -1.499309,14.99621 0.806232,23.67822 0.735511,2.77561 2.079231,5.99848 3.210785,7.72172 0.523344,0.81558 0.678932,0.93397 1.329576,1.17076 0.664788,0.22363 0.721366,0.2894 0.594066,0.51302 -0.09901,0.17102 -0.09901,0.30256 0.01414,0.4341 0.113155,0.13155 -0.07072,0.27625 -0.876955,0.6972 -0.565777,0.2894 -1.513454,0.81558 -2.093375,1.18391 -2.192386,1.34176 -1.98022,1.69693 0.438477,0.71035 4.922261,-1.98634 9.066578,-3.10448 14.271728,-3.85429 1.79634,-0.26309 2.60257,-0.30256 6.50643,-0.30256 3.97459,-0.0132 4.69595,0.0263 6.64788,0.30256 1.86707,0.26309 6.46401,1.22337 7.25609,1.52593 0.15559,0.0658 0.24046,0.0395 0.24046,-0.0921 0,-0.22364 -2.98447,-1.5917 -3.96044,-1.81534 -1.0184,-0.23677 -2.2631,-0.68403 -2.2631,-0.81558 0,-0.0658 0.2546,-0.53933 0.55163,-1.06551 1.72561,-2.93348 3.67754,-8.02429 4.52621,-11.79965 0.79209,-3.4728 1.06083,-5.94586 1.06083,-9.47128 0,-4.03845 -0.55163,-7.30078 -1.62661,-9.74753 -0.29703,-0.68404 -0.55163,-1.31546 -0.55163,-1.38123 0,-0.0658 0.55163,-0.36833 1.24471,-0.67088 2.88546,-1.276 5.89823,-3.55173 7.28438,-5.51176 0.77794,-1.09183 1.51345,-2.44675 1.41445,-2.5783 -0.16974,-0.26309 -0.49507,-0.0263 -1.34373,0.97344 -2.30554,2.70984 -5.86994,5.27498 -8.64224,6.22211 l -0.69308,0.23678 -0.53748,-0.59196 c -0.29704,-0.3157 -0.90525,-0.81558 -1.32958,-1.09182 l -0.79209,-0.49988 0.96182,-0.93397 c 2.81474,-2.723 4.7101,-6.13002 5.45975,-9.77384 0.29703,-1.48646 0.41018,-3.01239 0.26874,-3.72274 l -0.1273,-0.59195 z"
                     id="path122" />
                  <path
                     onClick={() => this.props.onFill(8)} fill={this.props.fillColors[8]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 105.64167,239.22806 c 2.12166,0.51303 4.01702,1.14444 5.40316,1.80218 0.63651,0.30255 0.83453,0.11838 0.43848,-0.38149 -0.46676,-0.60511 -0.48091,-0.67088 -0.18388,-0.81558 1.34373,-0.67088 5.30417,-0.88135 7.36925,-0.39464 0.59407,0.13155 1.38616,0.38149 1.73976,0.53934 0.86282,0.36833 0.80624,0.53934 -0.6082,1.86795 -1.59832,1.52593 -3.38052,2.6046 -5.33245,3.23602 -1.96608,0.64458 -2.57429,0.73666 -5.07785,0.7235 -2.51771,0 -3.28151,-0.11839 -5.36074,-0.84189 -1.7539,-0.61827 -4.950547,-2.64407 -7.015633,-4.4594 -0.876954,-0.77612 -0.905243,-0.81558 -0.636499,-1.0129 0.749655,-0.52618 2.220675,-0.69719 5.304162,-0.64458 2.20652,0.0526 2.82888,0.10525 3.96044,0.38149 z"
                     id="path151" />
               </g>
               <g
                  id="layer4">
                  <path
                     onClick={() => this.props.onFill(9)} fill={this.props.fillColors[9]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 98.413865,166.36495 c 0.8911,0.51303 1.626605,1.40754 2.517705,3.02555 0.46677,0.8682 0.90525,1.72324 0.96182,1.90741 0.0565,0.18416 0.18388,0.49987 0.28289,0.7235 0.099,0.21047 0.2546,0.65773 0.35361,0.98659 0.11316,0.32887 0.22632,0.64458 0.26875,0.72351 0.0849,0.13154 0.48091,1.61801 0.70722,2.6309 0.62235,2.76246 0.73551,3.40704 0.99011,5.3276 0.41019,3.09132 0.49505,4.85404 0.5092,9.86592 0,3.7359 -0.0565,5.64331 -0.18388,6.37996 -0.49506,2.8677 -0.91938,4.05161 -1.47102,4.18315 -0.18388,0.0395 -0.56578,0.13155 -0.84866,0.19732 -0.52335,0.13155 -0.5375,0.13155 -0.45263,-0.22362 0.0565,-0.18417 0.14144,-0.4078 0.19803,-0.47357 0.0565,-0.0789 0.14144,-0.27625 0.19801,-0.46041 0.0566,-0.18416 0.19803,-0.65773 0.33947,-1.05236 0.36775,-1.14445 0.32532,-4.7488 -0.0849,-6.06425 -0.52335,-1.7101 -0.97597,-2.49937 -2.0368,-3.49912 -0.862807,-0.82874 -1.442728,-1.09183 -2.362116,-1.09183 -0.834521,0.0131 -1.089121,0.14471 -2.263108,1.22337 -0.86281,0.78928 -1.004255,0.99975 -1.357865,1.97319 -0.2546,0.73665 -0.410188,1.49962 -0.48091,2.42044 -0.05658,0.74981 -0.141444,1.39438 -0.198023,1.43385 -0.05657,0.0526 -0.09901,-0.0263 -0.09901,-0.18417 0,-0.1447 -0.05658,-0.30255 -0.1273,-0.34201 -0.07072,-0.0395 -0.155589,-0.2631 -0.198022,-0.49988 -0.04243,-0.23678 -0.169733,-0.88136 -0.297033,-1.42069 -0.3819,-1.68378 -0.60821,-2.86769 -0.919388,-4.73564 -0.693077,-4.20947 -0.919387,-10.3658 -0.509199,-13.68075 0.240456,-1.96002 0.551633,-3.69643 0.777943,-4.341 0.05658,-0.18417 0.183878,-0.59196 0.282889,-0.92082 0.09901,-0.32887 0.353611,-0.96028 0.579921,-1.42069 0.226312,-0.46041 0.410189,-0.88136 0.410189,-0.94713 0,-0.0526 0.04243,-0.13155 0.113155,-0.15786 0.05658,-0.0263 0.240455,-0.27624 0.410188,-0.56564 0.297033,-0.52619 1.145699,-1.18391 1.669043,-1.28915 0.579921,-0.13154 1.824631,0.0658 2.319685,0.36833 z"
                     id="path159" />
                  <path
                     onClick={() => this.props.onFill(10)} fill={this.props.fillColors[10]}
                     fill-rule="evenodd" stroke="#000000" stroke-width="0.0136405"
                     d="m 123.40707,165.85192 c 1.08911,0.48672 2.2631,2.18365 2.94203,4.23577 0.52335,1.56539 0.65065,2.1705 1.08913,4.6304 0.22631,1.24968 0.24045,8.70832 0.0141,9.73438 -0.0708,0.39464 -0.22631,1.19707 -0.31118,1.77586 -0.5092,3.13079 -1.58418,7.31394 -2.70159,10.39211 -0.8628,2.38097 -2.02265,4.66987 -2.36212,4.66987 -0.28289,-0.0132 -1.30128,-0.22363 -1.372,-0.28941 -0.0283,-0.0263 0.12729,-0.55248 0.35361,-1.1576 0.57992,-1.5917 0.74965,-2.80192 0.66478,-4.73564 -0.1273,-2.40729 -0.62235,-3.65697 -1.89535,-4.73564 -0.77794,-0.65773 -0.77794,-0.65773 -1.75391,-0.65773 h -0.99011 l -0.79209,0.68404 c -0.7638,0.68403 -1.59832,1.74956 -1.78219,2.27574 -0.0424,0.1447 -0.16974,0.49988 -0.28289,0.77612 l -0.21217,0.51303 -0.15559,-0.68404 c -0.31118,-1.35492 -0.16974,-6.43258 0.26874,-9.74753 0.0708,-0.53934 0.19803,-1.52593 0.28289,-2.1705 0.19802,-1.51278 0.33947,-2.23628 0.79209,-4.27524 0.19802,-0.90766 0.42433,-1.8811 0.48091,-2.17049 0.22631,-0.99976 1.15985,-3.68329 1.66905,-4.80142 1.01839,-2.22312 2.30553,-3.81482 3.46538,-4.27523 0.62235,-0.24994 1.99436,-0.24994 2.58843,0.0131 z"
                     id="path157" />
                  <path
                     onClick={() => this.props.onFill(11)} fill={this.props.fillColors[11]}
                     fill-rule="evenodd" fill="#000000" stroke-width="0.0136405"
                     d="m 111.61062,206.17065 c -4.4555,0.36832 -8.61396,1.60485 -11.556,3.44649 -1.131555,0.6972 -2.998619,2.48621 -3.592685,3.42019 -0.2546,0.42095 -0.664788,1.27599 -0.891099,1.90741 -0.367755,0.99975 -0.410188,1.26284 -0.339466,2.10473 0.183877,2.07842 0.86281,3.57804 2.277253,4.99873 2.843027,2.85454 8.048177,4.4857 14.285867,4.49886 6.77518,0 12.03691,-1.68378 15.29012,-4.90665 1.86707,-1.84164 2.37627,-2.88085 2.56015,-5.09082 0.099,-1.44699 -0.21217,-2.99923 -0.90525,-4.341 -0.41019,-0.80243 -0.77794,-1.23653 -1.93778,-2.30204 -1.20228,-1.11814 -1.62661,-1.40754 -2.63087,-1.86795 -3.63511,-1.63117 -7.8643,-2.26259 -12.56024,-1.86795 z"
                     id="path124" />
               </g>
            </svg>
         </div>
      );

   }
}