package com.br.ccbrec.entities;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "recitativos")
public class Recitativos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recitativos_id")
    private Long recitativos_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cult_id")
    private YouthCult youthCult;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "auxiliares_meeting_id")
    private AuxiliaresMeeting auxiliaresMeeting;

    @Column(name = "sex")
    private char sex;

    @Column(name = "recitativos_order")
    private int order;

    @Column(name = "book")
    private String book;

    @Column(name = "chapter")
    private int chapter;

    @Column(name = "first_verse")
    private int firstVerse;

    @ManyToOne
    private Roles editorRole;

    @ManyToOne
    private Roles readerRole;
}
