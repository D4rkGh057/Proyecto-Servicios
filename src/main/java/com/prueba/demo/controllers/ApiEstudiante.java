package com.prueba.demo.controllers;

import com.prueba.demo.models.Estudiante;
import com.prueba.demo.repository.IEstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class ApiEstudiante {
    @Autowired
    private IEstudianteRepository estudianteRepository;
//    @GetMapping("/")
//    public String index(){
//        return "index";
//    }

    @GetMapping("/all")
    public List<Estudiante> getAll(){
        return estudianteRepository.findAll();
    }

    @PostMapping("/save/{cedula}")
    public Estudiante save(@PathVariable String cedula, @RequestBody Estudiante estudiante){
        estudiante.setCedula(cedula);
        return estudianteRepository.saveAndFlush(estudiante);
    }

    @PutMapping("/edit/{cedula}")
    public Estudiante edit(@PathVariable String cedula, @RequestBody Estudiante estudiante){
        estudiante.setCedula(cedula);
        return estudianteRepository.saveAndFlush(estudiante);
    }

    @DeleteMapping("/delete/{cedula}")
    public void delete(@PathVariable String cedula){
        estudianteRepository.deleteById(cedula);
    }

}
